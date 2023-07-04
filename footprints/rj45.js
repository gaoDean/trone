// https://www.jaycar.com.au/pcb-modular-sockets-8-8-rj45/p/PS1478
module.exports = {
    params: {
        designator: 'RJ45',
        A1: {type: 'net', value: ''},
        A2: {type: 'net', value: ''},
        A3: {type: 'net', value: ''},
        A4: {type: 'net', value: ''},
        A5: {type: 'net', value: ''},
        A6: {type: 'net', value: ''},
        A7: {type: 'net', value: ''},
        A8: {type: 'net', value: ''},
    },
    body: p => `
(module RJ45_Amphenol_54602-x08_Horizontal (layer "F.Cu") (tedit 64816976)
  ${p.at /* parametric position */}
(fp_text reference "${p.ref}" (at -3.6 0 ${-90 + p.rot}) (layer F.SilkS) ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
        )
  (fp_line (start -4 -0.5) (end -4 0.5) (width 0.12) (layer "F.SilkS") )
  (fp_line (start -4 0.5) (end -3.5 0) (width 0.12) (layer "F.SilkS") )
  (fp_line (start -3.5 0) (end -4 -0.5) (width 0.12) (layer "F.SilkS") )
  (fp_line (start -3.315 -3.88) (end -3.315 14.08) (width 0.12) (layer "F.SilkS") )
  (fp_line (start -3.315 14.08) (end 12.205 14.08) (width 0.12) (layer "F.SilkS") )
  (fp_line (start 12.205 -3.88) (end -3.315 -3.88) (width 0.12) (layer "F.SilkS") )
  (fp_line (start 12.205 -3.88) (end 12.205 14.08) (width 0.12) (layer "F.SilkS") )
  (fp_line (start -3.71 -4.27) (end -3.71 14.47) (width 0.05) (layer "F.CrtYd") )
  (fp_line (start -3.71 -4.27) (end 12.6 -4.27) (width 0.05) (layer "F.CrtYd") )
  (fp_line (start 12.6 14.47) (end -3.71 14.47) (width 0.05) (layer "F.CrtYd") )
  (fp_line (start 12.6 14.47) (end 12.6 -4.27) (width 0.05) (layer "F.CrtYd") )
  (fp_line (start -3.205 -2.77) (end -2.205 -3.77) (width 0.12) (layer "F.Fab") )
  (fp_line (start -3.205 13.97) (end -3.205 -2.77) (width 0.12) (layer "F.Fab") )
  (fp_line (start -2.205 -3.77) (end 12.095 -3.77) (width 0.12) (layer "F.Fab") )
  (fp_line (start 12.095 -3.77) (end 12.095 13.97) (width 0.12) (layer "F.Fab") )
  (fp_line (start 12.095 13.97) (end -3.205 13.97) (width 0.12) (layer "F.Fab") )


  (pad "" np_thru_hole circle (at -1.27 6.35 270) (size 3.2 3.2) (drill 3.2) (layers "*.Cu" "*.Mask") )
  (pad "" np_thru_hole circle (at -1.27 8.89 270) (size 3.2 3.2) (drill 3.2) (layers "*.Cu" "*.Mask") )
  (pad "" np_thru_hole circle (at 10.16 6.35 270) (size 3.2 3.2) (drill 3.2) (layers "*.Cu" "*.Mask") )
  (pad "" np_thru_hole circle (at 10.16 8.89 270) (size 3.2 3.2) (drill 3.2) (layers "*.Cu" "*.Mask") )
  (pad "1" thru_hole circle (at 0 -1.5748 270) (size 1.220256 1.220256) (drill 0.76) (layers "*.Cu" "*.Mask") ${p.A8.str})
  (pad "1" thru_hole circle (at 0 0 270) (size 1.220256 1.220256) (drill 0.76) (layers "*.Cu" "*.Mask") ${p.A1.str})
  (pad "2" thru_hole circle (at 1.27 -2.54 270) (size 1.220256 1.220256) (drill 0.76) (layers "*.Cu" "*.Mask") ${p.A2.str})
  (pad "2" thru_hole circle (at 1.27 0.9652 270) (size 1.220256 1.220256) (drill 0.76) (layers "*.Cu" "*.Mask") ${p.A7.str})
  (pad "3" thru_hole circle (at 2.54 -1.5748 270) (size 1.220256 1.220256) (drill 0.76) (layers "*.Cu" "*.Mask") ${p.A6.str})
  (pad "3" thru_hole circle (at 2.54 0 270) (size 1.220256 1.220256) (drill 0.76) (layers "*.Cu" "*.Mask") ${p.A3.str})
  (pad "4" thru_hole circle (at 3.81 -2.54 270) (size 1.220256 1.220256) (drill 0.76) (layers "*.Cu" "*.Mask") ${p.A4.str})
  (pad "4" thru_hole circle (at 3.81 0.9652 270) (size 1.220256 1.220256) (drill 0.76) (layers "*.Cu" "*.Mask") ${p.A5.str})
  (pad "5" thru_hole circle (at 5.08 -1.5748 270) (size 1.220256 1.220256) (drill 0.76) (layers "*.Cu" "*.Mask") ${p.A4.str})
  (pad "5" thru_hole circle (at 5.08 0 270) (size 1.220256 1.220256) (drill 0.76) (layers "*.Cu" "*.Mask") ${p.A5.str})
  (pad "6" thru_hole circle (at 6.35 -2.54 270) (size 1.220256 1.220256) (drill 0.76) (layers "*.Cu" "*.Mask") ${p.A6.str})
  (pad "6" thru_hole circle (at 6.35 0.9652 270) (size 1.220256 1.220256) (drill 0.76) (layers "*.Cu" "*.Mask") ${p.A3.str})
  (pad "7" thru_hole circle (at 7.62 -1.5748 270) (size 1.220256 1.220256) (drill 0.76) (layers "*.Cu" "*.Mask") ${p.A2.str})
  (pad "7" thru_hole circle (at 7.62 0 270) (size 1.220256 1.220256) (drill 0.76) (layers "*.Cu" "*.Mask") ${p.A7.str})
  (pad "8" thru_hole circle (at 8.89 -2.54 270) (size 1.220256 1.220256) (drill 0.76) (layers "*.Cu" "*.Mask") ${p.A8.str})
  (pad "8" thru_hole circle (at 8.89 0.9652 270) (size 1.220256 1.220256) (drill 0.76) (layers "*.Cu" "*.Mask") ${p.A1.str})
)
     `
}
