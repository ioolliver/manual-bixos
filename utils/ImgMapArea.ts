import { useEffect } from "react";

/* Tive que colocar o código fonte de uma biblioteca JS diretamente aqui devido a problemas de importação no website */
export default function useImgMapArea() {
    useEffect(() => {
        let maps = []

        function scaleImageMap(map : any) {
            function resizeMap() {
              function resizeAreaTag(cachedAreaCoords : any, idx : any) {
                function scale(coord : any) {
                  var dimension : "width" | "height" = 1 === (isWidth = 1 - isWidth) ? 'width' : 'height'
                  return (
                    (padding[dimension]) +
                    Math.floor(Number(coord) * scalingFactor[dimension])
                  )
                }
        
                var isWidth = 0
                areas[idx].coords = cachedAreaCoords
                  .split(',')
                  .map(scale)
                  .join(',')
              }
        
              var scalingFactor = {
                width: image.width / image.naturalWidth,
                height: image.height / image.naturalHeight,
              }
        
              var padding = {
                width: parseInt(
                  window.getComputedStyle(image, null).getPropertyValue('padding-left'),
                  10
                ),
                height: parseInt(
                  window.getComputedStyle(image, null).getPropertyValue('padding-top'),
                  10
                ),
              }
        
              cachedAreaCoordsArray.forEach(resizeAreaTag)
            }
        
            function getCoords(e : any) {
              //Normalize coord-string to csv format without any space chars
              return e.coords.replace(/ *, */g, ',').replace(/ +/g, ',')
            }
        
            function debounce() {
              clearTimeout(timer)
              timer = setTimeout(resizeMap, 250)
            }
        
            function start() {
              if (
                image.width !== image.naturalWidth ||
                image.height !== image.naturalHeight
              ) {
                resizeMap()
              }
            }
        
            function addEventListeners() {
              image.addEventListener('load', resizeMap, false) //Detect late image loads in IE11
              window.addEventListener('focus', resizeMap, false) //Cope with window being resized whilst on another tab
              window.addEventListener('resize', debounce, false)
              window.addEventListener('readystatechange', resizeMap, false)
              document.addEventListener('fullscreenchange', resizeMap, false)
            }
        
            function beenHere() {
              return 'function' === typeof map._resize
            }
        
            function getImg(name : any) {
              return document.querySelector('img[usemap="' + name + '"]')
            }
        
            function setup() {
              areas = map.getElementsByTagName('area')
              cachedAreaCoordsArray = Array.prototype.map.call(areas, getCoords)
              image = getImg('#' + map.name) || getImg(map.name)
              map._resize = resizeMap //Bind resize method to HTML map element
            }
        
            var /*jshint validthis:true */
              areas : any = null,
              cachedAreaCoordsArray : any = null,
              image : any = null,
              timer : any = null
        
            if (!beenHere()) {
              setup()
              addEventListeners()
              start()
            } else {
              map._resize() //Already setup, so just resize map
            }
          }

        function init(element : any) {
            if (element) {
                scaleImageMap(element)
                maps.push(element)
            }
        }

        Array.prototype.forEach.call(
            document.querySelectorAll('map'),
            init
        )
    })
}