import pandas as pd
 
a = pd.read_csv("list.csv")
 
a.to_html("Data.html")
 
html_file = a.to_html()