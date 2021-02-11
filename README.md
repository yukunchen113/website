# My Website

# TODO (Next Stage):
- for mobile, animate when item is in viewport
- intro animation to show that design represents brain
    - make brain perform different animations on hover of different topics

# Bugs:
- if intro animation is disrupted, then some items remain hidden.
    - we can perhaps set a timer:
        - onClicks will be listened to only after a certain interval
        - putting an invisible css layer that disappears after a certain interval
    - https://overreacted.io/making-setinterval-declarative-with-react-hooks/ looks promising
