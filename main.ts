let pi = 0
let y = 0
let x = 0
let inside = 0
// A simple Monte-Carlo simulation to approximate Pi.
// 
// number of points
let n = 1000000
// radius of the circle
let r = 4000
// radius square
let r2 = r * r
basic.forever(function () {
    inside = 0
    for (let index = 0; index < n; index++) {
        // generate a point within the square
        x = randint(0, r + 1)
        y = randint(0, r + 1)
        // test if the point is within the circle
        // sqrt(x**2 + y**2) < r ==> x**2 + y**2 < r**2
        if (x * x + y * y < r2) {
            inside += 1
        }
    }
    // surface of a square: 4 * r * r surface of a circle:
    // r * r * pi => inside / n ~= (r*r*pi) / (4*r*r) ~=
    // pi / 4 pi = inside / n * 4
    pi = inside * 4 / n
    // show results
    basic.showLeds(`
        # # # # #
        . # . # .
        . # . # .
        . # . # .
        . # . . #
        `)
    basic.showString(" " + pi)
})
