module.exports = {
    params: {
        designator: 'SW',
        SW1: {type: 'net', value: ''},
        SW2: {type: 'net', value: ''},
        SW3: {type: 'net', value: ''},
    },
    body: p => `
(module SW_SS12D07VG4 (layer F.Cu) (tedit 64816976)
  ${p.at /* parametric position */}
(fp_text reference "${p.ref}" (at -3.6 0 ${-90 + p.rot}) (layer F.SilkS) ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
        )
  (pad 1 thru_hole rect (at -2.0 0.0) (size 1.308 1.308) (drill 0.8) (layers *.Cu *.Mask) ${p.SW1.str})
  (pad 2 thru_hole circle (at 0.0 0.0) (size 1.308 1.308) (drill 0.8) (layers *.Cu *.Mask) ${p.SW2.str})
  (pad 3 thru_hole circle (at 2.0 0.0) (size 1.308 1.308) (drill 0.8) (layers *.Cu *.Mask) ${p.SW3.str})
  (pad S1 thru_hole oval (at -4.2 0.0) (size 1.23 2.46) (drill oval 0.7 1.5) (layers *.Cu *.Mask))
  (pad S2 thru_hole oval (at 4.2 0.0) (size 1.23 2.46) (drill oval 0.7 1.5) (layers *.Cu *.Mask))
  (fp_line (start -4.4 -2.3) (end -4.4 2.3) (layer F.Fab) (width 0.127))
  (fp_line (start -4.4 2.3) (end 4.4 2.3) (layer F.Fab) (width 0.127))
  (fp_line (start 4.4 2.3) (end 4.4 -2.3) (layer F.Fab) (width 0.127))
  (fp_line (start 4.4 -2.3) (end -4.4 -2.3) (layer F.Fab) (width 0.127))
  (fp_line (start -4.4 2.3) (end 4.4 2.3) (layer F.SilkS) (width 0.127))
  (fp_line (start 4.4 -2.3) (end -4.4 -2.3) (layer F.SilkS) (width 0.127))
  (fp_circle (center -2.0 3.0) (end -1.9 3.0) (layer F.SilkS) (width 0.2))
  (fp_line (start -5.065 -2.55) (end -5.065 2.55) (layer F.CrtYd) (width 0.05))
  (fp_line (start -5.065 2.55) (end 5.065 2.55) (layer F.CrtYd) (width 0.05))
  (fp_line (start 5.065 2.55) (end 5.065 -2.55) (layer F.CrtYd) (width 0.05))
  (fp_line (start 5.065 -2.55) (end -5.065 -2.55) (layer F.CrtYd) (width 0.05))
  (fp_line (start -4.4 -2.3) (end -4.4 -1.55) (layer F.SilkS) (width 0.127))
  (fp_line (start -4.4 2.3) (end -4.4 1.55) (layer F.SilkS) (width 0.127))
  (fp_line (start 4.4 2.3) (end 4.4 1.55) (layer F.SilkS) (width 0.127))
  (fp_line (start 4.4 -2.3) (end 4.4 -1.55) (layer F.SilkS) (width 0.127))
  (fp_circle (center -2.0 3.0) (end -1.9 3.0) (layer F.Fab) (width 0.2))
)
     `
}
