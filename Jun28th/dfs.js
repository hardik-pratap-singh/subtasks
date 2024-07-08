let textNodes = [] ; 
        let body = document.querySelector("body") ;
        console.log(body.childNodes) ; 

        getAllTextNodes(body) ; 


        function getAllTextNodes(node){
            if(node.nodeType === 3){
                textNodes.push({node : node , parent : node.parentNode}) ;
                return ; 
            }

            let children = Array.from(node.childNodes) ; 
            for(let i = 0 ; i < children.length ; i++){
                getAllTextNodes(children[i]) ;
            }
        }

        console.log("textNodes  " , textNodes) ; 

        const iconSrc = '../info.svg';
        const iconAlt = 'Icon description';
        const targetWords = ['crazy']; 
        // const targetWords = ['crazy', 'stupid', 'mad']; 
        let ct = 0 ; 


        
        textNodes.forEach(text => {
            const textNode = text.node ; 
            const parentNode = text.parent ; 
            // console.log(text)
            targetWords.forEach(targetWord => {
                if(textNode.textContent.includes(targetWord)){
                    const className = `icon-container-${targetWord}`;
                    const parts = textNode.textContent.split(targetWord);
                    const replacedHTML = parts.join(`${targetWord}<span class="${className}">**</span>`);
                    console.log(replacedHTML)
                    parentNode.innerHTML = replacedHTML ; 

                    // console.log(parts)
                    // console.log(textNode.textContent)
                    // console.log(targetWord) ; 
                    // console.log("hello")
                }
            } )
            // targetWords.forEach(targetWord => {
            //     if(textNode.textContent.includes(targetWord)){
            //         const className = `icon-container-${targetWord}`;
            //         const parts = textNode.textContent.split(targetWord);
            //         const replacedHTML = parts.join(`${targetWord}<span class="${className}"></span>`);
            //         parentNode.innerHTML = replacedHTML;
            //     }
            // })

            // const iconContainers = parentNode.querySelectorAll(`.${className}`);

            //         // console.log(iconContainers);
            //         iconContainers.forEach(container => {
            //             // console.log(container) ; 
            //             const icon = document.createElement('img');
            //             icon.src = iconSrc;
            //             icon.alt = iconAlt;
            //             container.appendChild(icon);

            //             // console.log(icon)
            //         });
        })

        let doc = document.querySelectorAll("span")
        console.log(doc)
        // document.querySelectorAll('*').forEach(element => {
        //     // let element = obj.parent ; 
        //     // console.log(element)
        //     targetWords.forEach(targetWord => {
                
        //         // ct++ ; 
        //         if (element.innerHTML.includes(targetWord)) {
        //             const className = `icon-container-${targetWord}`;
        //             // Split the innerHTML into parts to handle replacements
        //             const parts = element.innerHTML.split(targetWord);
        //             const replacedHTML = parts.join(`${targetWord}<span class="${className}"></span>`);

        //             // Update the element with the replaced content
        //             element.innerHTML = replacedHTML;
        //             // console.log(replacedHTML)

        //             // Add icon after each occurrence of the target word
        //             const iconContainers = element.querySelectorAll(`.${className}`);

        //             // console.log(iconContainers);
        //             iconContainers.forEach(container => {
        //                 // console.log(container) ; 
        //                 const icon = document.createElement('img');
        //                 icon.src = iconSrc;
        //                 icon.alt = iconAlt;
        //                 container.appendChild(icon);

        //                 // console.log(icon)
        //             });
        //         }
        //     });
        // });

        // console.log(ct)