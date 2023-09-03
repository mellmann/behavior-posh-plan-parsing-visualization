# behavior-posh-plan-parsing-visualization

## Libs & Docs

* Graphviz    
  https://www.graphviz.org

* Graphviz doc   
  https://graphviz.org/doc

* https://viz-js.com/    
  Render graphviz online
  
* viz.js as a standalone js-lib    
  https://www.npmjs.com/package/@viz-js/viz?activeTab=code
  
  
## Run

* run the viz server 

  ```sh
  python viz_server.py
  ```
  
* a website should open automatically. If not, open yout browser to

 ```sh
 127.0.0.1/8000
 ```
 
* the website requests once per second a graphiz graph for the posh plan.
* the static plan is read from 

```sh
plan_praph.txt
```


## JSON/Graphviz/XML experiments

* plan.json - some manual experimental draft for converting plan.xml to json
* xml2json.py - experiments for reading and working with xml