#Introduction
This module is the wrapper over ngx-formly (created for generating forms from the provided schema). The purpose of publishing this module 
is to use the capabilities of ngx-formly in any tech framework.

#How to use this module
At present we are generating a js file which will do the magic for you. 
You just need to include this js file in the appropriate location of your project. In many case it is index.html file

## Example
### Use from unpkg.com
```
<script src="https://unpkg.com/formly-wrapper-angular-element@<version>/dist/angular-custom-elements/custom-formly-wrapper.js"></script>
``` 

### Local Version
```
<script src="<path_to_node_module/dist/angular-custom-elements/custom-formly-wrapper.js"></script>
```


What is the selector to use this webcomponent?
```
<app-formly-wrapper @submittedData='submitEditedData($event)' :init="dataModel" :input="componentSchema"></app-formly-wrapper>
```

# Properties
##Inputs
1. init: It is the model data which will be used to initialize the fields when form opens
2. input: It is the schema against which you want to generate form
#Output
1. submittedData : Custom event which returns the updated form after submission

