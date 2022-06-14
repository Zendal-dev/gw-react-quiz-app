export default function closeFullscreen() {
   if (document.cancelFullScreen) {
      document.cancelFullScreen()
   } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen()
   } else if (document.webkitCancelFullScreen) {   /* Chrome, Safari and Opera */
      document.webkitCancelFullScreen()
   } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen()
   }
}