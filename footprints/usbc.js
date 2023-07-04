// https://www.jaycar.com.au/pcb-mount-usb-3-1-type-c-socket/p/PS0930
module.exports = {
    params: {
        designator: 'USBC',
        A2: {type: 'net', value: ''},
        A5: {type: 'net', value: ''},
        A7: {type: 'net', value: ''},
        A10: {type: 'net', value: ''},
        B1: {type: 'net', value: ''},
        B2: {type: 'net', value: ''},
        B3: {type: 'net', value: ''},
        B4: {type: 'net', value: ''},
        B5: {type: 'net', value: ''},
        B6: {type: 'net', value: ''},
        B7: {type: 'net', value: ''},
        B8: {type: 'net', value: ''},
        B9: {type: 'net', value: ''},
        B10: {type: 'net', value: ''},
        B11: {type: 'net', value: ''},
        B12: {type: 'net', value: ''},
    },
    body: p => `

(module AMPHENOL_12401548E4#2A (layer F.Cu) (tedit 647D2A9C)

  ${p.at /* parametric position */}
(fp_text reference "${p.ref}" (at -3.6 0 ${-90 + p.rot}) (layer F.SilkS) ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
        )
  (pad None np_thru_hole circle (at -3.6 -4.34) (size 0.65 0.65) (drill 0.65) (layers *.Cu *.Mask))
  (pad None np_thru_hole circle (at 3.45 -4.34) (size 0.65 0.65) (drill 0.65) (layers *.Cu *.Mask))
  (pad None np_thru_hole circle (at 3.75 -4.34) (size 0.65 0.65) (drill 0.65) (layers *.Cu *.Mask))
  (pad A2 smd rect (at -2.25 -5.0 90.0) (size 0.3 0.7) (layers F.Cu F.Mask F.Paste) ${p.A2.str})
  (pad A5 smd rect (at -0.75 -5.0 90.0) (size 0.3 0.7) (layers F.Cu F.Mask F.Paste) ${p.A5.str})
  (pad A7 smd rect (at 0.25 -5.0 90.0) (size 0.3 0.7) (layers F.Cu F.Mask F.Paste) ${p.A7.str})
  (pad A10 smd rect (at 1.75 -5.0 90.0) (size 0.3 0.7) (layers F.Cu F.Mask F.Paste) ${p.A10.str})
  (pad B1 thru_hole circle (at 2.8 -3.69) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.B1.str})
  (pad B2 thru_hole circle (at 2.4 -2.99) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.B2.str})
  (pad B3 thru_hole circle (at 1.6 -2.99) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.B3.str})
  (pad B4 thru_hole circle (at 1.2 -3.69) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.B4.str})
  (pad B5 thru_hole circle (at 0.8 -2.99) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.B5.str})
  (pad B6 thru_hole circle (at 0.4 -3.69) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.B6.str})
  (pad B7 thru_hole circle (at -0.4 -3.69) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.B7.str})
  (pad B8 thru_hole circle (at -0.8 -2.99) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.B8.str})
  (pad B9 thru_hole circle (at -1.2 -3.69) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.B9.str})
  (pad B10 thru_hole circle (at -1.6 -2.99) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.B10.str})
  (pad B11 thru_hole circle (at -2.4 -2.99) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.B11.str})
  (pad B12 thru_hole circle (at -2.8 -3.69) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.B12.str})
  (pad SH1 thru_hole oval (at -4.13 -3.09) (size 0.8 1.6) (drill oval 0.5 1.1) (layers *.Cu *.Mask))
  (pad SH2 thru_hole oval (at 4.13 -3.09) (size 0.8 1.6) (drill oval 0.5 1.1) (layers *.Cu *.Mask))
  (pad SH3 thru_hole oval (at -4.49 2.86) (size 0.8 1.6) (drill oval 0.5 1.1) (layers *.Cu *.Mask))
  (pad SH4 thru_hole oval (at 4.49 2.86) (size 0.8 1.6) (drill oval 0.5 1.1) (layers *.Cu *.Mask))
  (fp_arc (start 3.45 -4.34) (end 3.125 -4.34) (angle 90.0) (layer Edge.Cuts) (width 0.01))
  (fp_arc (start 3.45 -4.34) (end 3.45 -4.015) (angle 90.0) (layer Edge.Cuts) (width 0.01))
  (fp_line (start 3.45 -4.015) (end 3.75 -4.015) (layer Edge.Cuts) (width 0.01))
  (fp_arc (start 3.75 -4.34) (end 4.075 -4.34) (angle 90.0) (layer Edge.Cuts) (width 0.01))
  (fp_arc (start 3.75 -4.34) (end 3.75 -4.665) (angle 90.0) (layer Edge.Cuts) (width 0.01))
  (fp_line (start 3.75 -4.665) (end 3.45 -4.665) (layer Edge.Cuts) (width 0.01))
  (fp_line (start -4.6 -5.25) (end 4.6 -5.25) (layer F.Fab) (width 0.127))
  (fp_line (start 4.6 -5.25) (end 4.6 5.25) (layer F.Fab) (width 0.127))
  (fp_line (start 4.6 5.25) (end -4.6 5.25) (layer F.Fab) (width 0.127))
  (fp_line (start -4.6 5.25) (end -4.6 -5.25) (layer F.Fab) (width 0.127))
  (fp_line (start -4.6 -2.24) (end -4.6 1.86) (layer F.SilkS) (width 0.127))
  (fp_line (start 4.6 -2.24) (end 4.6 1.86) (layer F.SilkS) (width 0.127))
  (fp_line (start -4.6 -3.94) (end -4.6 -5.25) (layer F.SilkS) (width 0.127))
  (fp_line (start -4.6 -5.25) (end -3.1 -5.25) (layer F.SilkS) (width 0.127))
  (fp_line (start 3.1 -5.25) (end 4.6 -5.25) (layer F.SilkS) (width 0.127))
  (fp_line (start 4.6 -5.25) (end 4.6 -3.94) (layer F.SilkS) (width 0.127))
  (fp_line (start -4.6 3.86) (end -4.6 5.25) (layer F.SilkS) (width 0.127))
  (fp_line (start -4.6 5.25) (end 4.6 5.25) (layer F.SilkS) (width 0.127))
  (fp_line (start 4.6 5.25) (end 4.6 3.86) (layer F.SilkS) (width 0.127))
  (fp_line (start -5.2 -5.6) (end 5.2 -5.6) (layer F.CrtYd) (width 0.05))
  (fp_line (start 5.2 -5.6) (end 5.2 5.5) (layer F.CrtYd) (width 0.05))
  (fp_line (start 5.2 5.5) (end -5.2 5.5) (layer F.CrtYd) (width 0.05))
  (fp_line (start -5.2 5.5) (end -5.2 -5.6) (layer F.CrtYd) (width 0.05))
  (fp_circle (center -2.75 -5.85) (end -2.7 -5.85) (layer F.SilkS) (width 0.1))
  (fp_circle (center -2.75 -4.83) (end -2.7 -4.83) (layer F.Fab) (width 0.1))
)
     `
}
