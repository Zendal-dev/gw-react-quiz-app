export default function openFullscreen() {
   if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
         document.documentElement.requestFullScreen()
      } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
         document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullScreen) {   /* Chrome, Safari & Opera */
         document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
      } else if (document.msRequestFullscreen) { /* IE/Edge */
         document.documentElement.msRequestFullscreen()
      }
   }
}