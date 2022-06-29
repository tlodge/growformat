window.storyFormat({"name":"mytest","version":"0.0.1","source":"<html>\n    <head>\n       <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n       <meta charset=\"utf-8\">\n       <title>{{STORY_NAME}}</title>\n   </head>\n    <body>\n        {{STORY_DATA}}\n    \n        <script title=\"Twine engine code\" data-main=\"example\">\n            (function(){\n                // Find the 'tw-storydata' element.\n                let storydata = document.querySelector('tw-storydata');\n                \n                // Get the 'startnode' attribute. Save its 'value'.\n                let startnode = storydata.attributes['startnode'].value;\n                \n                // Find the element with a 'pid' of the startnode\n                let passagedata = document.querySelector(`[pid=\"${startnode}\"]`);\n                \n                // Create a new 'tw-passage' element\n                let passage = document.createElement('tw-passage');\n                // Set the 'innerHTML' of the passagedata to 'tw-passage' element\n                passage.innerHTML = passagedata.innerHTML;\n                // Append the child element to the HTML <body>\n                document.body.appendChild(passage);\n            }())\n        </script>\n    </body>\n</html>\n","description":"An example story format"});