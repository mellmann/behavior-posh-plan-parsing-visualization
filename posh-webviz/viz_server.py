
from http.server import BaseHTTPRequestHandler, SimpleHTTPRequestHandler, HTTPServer
from socketserver import ThreadingMixIn
from threading import Thread
import traceback

# convenience
import webbrowser

import json

PORT = 8000

class RequestHandler(SimpleHTTPRequestHandler):

    def log_message(self, format, *args):
        BaseHTTPRequestHandler.log_message(self, format, *args)
    
    # read a static push plan file
    def get_static_posh_plan_gpahviz(self):
        content = ""
        with open("plan_praph.txt", "r") as f:
            content= f.read()
        return content
    
    
    def do_POST(self):
        try:
            #print("executing do_POST")
            
            # get the length of the data to read
            length = int(self.headers.get('content-length'))
            data = self.rfile.read(length)
            
            #print(data)
            #print(data.decode("utf8"))

            # parse json data
            msg = json.loads(data.decode("utf8"))
            print(msg)
            
            response = ""
            if 'posh' in msg and msg['posh'] == 'graphviz':
                response = self.get_static_posh_plan_gpahviz()
            
            #print(response)
            # header
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            
            # response
            self.wfile.write(str(response).encode("utf8"))
            
        except Exception:
            self.send_response(500) # internal server error
            self.send_header("Content-type", "text/html")
            self.end_headers()
            
            traceback.print_exc()
            
            # send the trace in a responce
            trace = traceback.format_exc()
            self.wfile.write(str(trace).encode("utf8"))


class ThreadedHTTPServer(ThreadingMixIn, HTTPServer):
    pass
        
if __name__ == "__main__":

  ThreadedHTTPServer.allow_reuse_address = True
  server = ThreadedHTTPServer(("", PORT), RequestHandler)
  
  print("Serving at port: {}".format(PORT))
  # automatically open webbrowser in a new tab (2)
  webbrowser.open('http://127.0.0.1:{}'.format(PORT), new=2)
  
  server.serve_forever()
  print("Stopped serving at port: {}".format(PORT))
  
  
