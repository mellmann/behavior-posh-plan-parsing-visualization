'''
  Read a posh plan in XML format and convert it to json.
'''

import xml.etree.ElementTree as E


# read the xml
tree = E.parse('plan.xml')
root = tree.getroot()

# list the top xml elements
for child in root:
    print(child.tag)
    print("   {}".format(child.attrib))


# find specific elements
for element in root.find('ActionPatterns'):
    for ap in element:
        print("AP: {}".format(ap.attrib['name']))
        for action in ap:
            print("  - {}".format(action))

# convert the xml tree into a directory recursively
d={}
for child in root:
    if child.tag not in d:
        d[child.tag]=[]
    dic={}
    for child2 in child:
        if child2.tag not in dic:
            dic[child2.tag]=child2.text
    d[child.tag].append(dic)
    
print(d)


## parser test
class POSH_Parser:
    def __init__(self):
        # result of the parsing
        self.action_patterns = {}
        self.competence_elements = {}
        
    ### actions
    def parse_Action(self, element):
        print("    Action: {}".format(element.attrib['name']) )
        return element.attrib['name']
        
    def parse_ActionPattern(self, element):
        print("  AP: {}".format(element.attrib['name']) )
        actions = self.parse_children(element)
        self.action_patterns[element.attrib['name']] = actions
        
        # test print for graphviz
        for a in actions:
            print("{} -> {};".format(element.attrib['name'], a))
        
        
    def parse_ActionPatterns(self, element):
        print("parse {}".format(element.tag) )
        self.parse_children(element)
    
    
    ### competences
    def parse_CompetenceElement(self, element):
        print("parse {}".format(element.tag) )
        
        # test print for graphviz
        print("{} -> {};".format(element.attrib['name'], element.attrib['triggers']))
        
        ## TODO: pase senses?
        #self.parse_children(element)
    
    def parse_CompetenceElements(self, element):
        print("parse {}".format(element.tag) )
        self.parse_children(element)
    
    
    def parse_Competences(self, element):
        print("parse {}".format(element.tag) )
    
    
    ### drives
    def parse_DriveElements(self, element):
        print("parse {}".format(element.tag) )
        
    def parse_Drives(self, element):
        print("parse {}".format(element.tag) )
    
    
    
    def parse_Plan(self, element):
        print("parse {}".format(element.tag) )
        self.parse_children(element)
    
    
    # basic methods
    def parse_children(self, element):
        result = []
        for child in element:
            result += [self.parse(child)]
        return result
        
    def parse(self, element):
        #print("parse {}".format(element.tag) )
        try:
            parser_method_name = "parse_{}".format(element.tag)
            parse_method = getattr(POSH_Parser, parser_method_name)
            return parse_method(self, element)
        except AttributeError as ex:
            print("Warning: No method {}".format(parser_method_name))
            print(ex)
            

# parser test
posh_parser = POSH_Parser()
posh_parser.parse(root)
print(posh_parser.action_patterns)
quit()

# test xmltodict
import xmltodict

with open('plan.xml', "r") as f:
    my_dict = xmltodict.parse(f.read())
    print(my_dict)