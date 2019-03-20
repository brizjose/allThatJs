when compiled, a module that imports like:

import {} from './..' 

will fail when compiled because commonJs does not understand the syntax

we need a module loader...

the package SystemJS helps us compile Typescript modules correctly in commonJS.

to install:

npm install --save systemjs@0.21.5

****the version 0.21.5 is important because is the one implemented here in the example.  I was not able to implement other versions

use global installation because it will be needed at runtime in production, not only development

also, include the script snippet in the index.html file (snippet may change over time)

this one points to the node_modules file that was installed:

<script src="node_modules/systemjs/dist/system.js"></script>

this one specifies the baseURL path and sets the extension:

<script>
    // st our base URL reference path
    SystemJS.config({
    baseURL: '/',
    // specify the default extension for files being compiled
    packages: {
        '/': {
        defaultExtension: 'js'
        }
    }
    });
    System.import('/math.js');
</script>
