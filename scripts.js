var Globals = {
    sheetData: [],
    thumbnailTray: document.querySelector('#thumbnail_tray'),
    popupTray: document.querySelector('#popup_tray'),
    messages: document.querySelector('#messages'),
    publicSpreadsheetUrl: '[INSERT PUBLIC URL OF GOOGLE SHEET HERE]'
}


var RenderingTools = {
    buildElement: function(tag, className, innerText){
        var newElement = document.createElement(tag);
        newElement.className = className;
        if(innerText){
            var newTextNode = document.createTextNode(innerText);
            newElement.appendChild(newTextNode);
        }
        return newElement;
    },
    buildThumbnail: function(imageObject, index){
        var thumbnailLink = RenderingTools.buildElement('a', 'thumbnail')
        var thumbnailImg = RenderingTools.buildElement('div', 'thumbnail__image')
        var thumbnailCaption = RenderingTools.buildElement('p', 'thumbnail__caption', imageObject.title)
        thumbnailImg.style.backgroundImage = "url('" + imageObject.source + "')"
        thumbnailLink.setAttribute('href', '#full_image_' + index)
        thumbnailLink.appendChild(thumbnailImg)
        thumbnailLink.appendChild(thumbnailCaption)
        thumbnailLink.dataset.lity = true
        return thumbnailLink
    },
    buildPopup: function(imageObject, index){
        var wrapper = RenderingTools.buildElement('div', 'popup lity-hide')
        var image = RenderingTools.buildElement('img', 'popup__img')
        var caption = RenderingTools.buildElement('p', 'popup__caption', imageObject.caption)
        image.setAttribute('src', imageObject.source)
        wrapper.setAttribute('id', "full_image_" + index)
        wrapper.appendChild(image)
        wrapper.appendChild(caption)
        return wrapper
    }
}

var DataFunctions = {
    fetchSheetData: function(){
        Tabletop.init({ 
            key: Globals.publicSpreadsheetUrl,
            callback: DataFunctions.handleSheetResponse,
            simpleSheet: true,
            debug: true
        })
    },
    handleSheetResponse: function(data) {
        if(data.length > 0){
            Globals.sheetData = data;
            Globals.messages.style.display = "none";
            console.log("Sheet Data:   ", Globals.sheetData);
            for(var i = 0; i < data.length; i++){
                var thumbnail = RenderingTools.buildThumbnail(data[i], i)
                var popup = RenderingTools.buildPopup(data[i], i)
                Globals.thumbnailTray.appendChild(thumbnail)
                Globals.popupTray.appendChild(popup)
            }
        }
        else {
            console.log("Error fetching data");
            Globals.messages.innerText = "There was an error fetching the images - please refresh the page";
        }
    }
}

//Main
window.addEventListener('DOMContentLoaded', DataFunctions.fetchSheetData)
