# website

The official Kyvos website proposition /bySA

The website presents both the consulting company (Kyvos) and the digital toolkit application (Kyvos Suite).
It will link as well to the WiKyvos, a shared and collaborative library of the Hospitality sector.


Toggle HTML element
To animate an element:
onclick="toggleDisplay('id', 'animation-name')"

id is the element id
animation-name is the name of the animation that will be used to toggle

animation-name is set in CSS with keyframes. For example:
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
Warning: animation will need a 'animation-reverse' to work properly

@keyframes fade-in-reverse {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
