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


# test  xmltodict
import xmltodict

with open('plan.xml', "r") as f:
    my_dict = xmltodict.parse(f.read())
    print(my_dict)