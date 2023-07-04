// https://www.aliexpress.com/item/4001037393646.html
module.exports = {
    params: {
        designator: 'EXP',
        layer: 'F',
        EXP1: {type: 'net', value: ''},
        EXP2: {type: 'net', value: ''},
        EXP3: {type: 'net', value: ''},
        EXP4: {type: 'net', value: ''},
        EXP5: {type: 'net', value: ''},
        EXP6: {type: 'net', value: ''},
        EXP7: {type: 'net', value: ''},
        EXP8: {type: 'net', value: ''},
        EXP9: {type: 'net', value: ''},
        EXP10: {type: 'net', value: ''},
        EXP11: {type: 'net', value: ''},
        EXP12: {type: 'net', value: ''},
        EXP13: {type: 'net', value: ''},
        EXP14: {type: 'net', value: ''},
        EXP15: {type: 'net', value: ''},
        EXP16: {type: 'net', value: ''},
        EXP17: {type: 'net', value: ''},
        EXP18: {type: 'net', value: ''},
        EXP19: {type: 'net', value: ''},
        EXP20: {type: 'net', value: ''},
        EXP21: {type: 'net', value: ''},
        EXP22: {type: 'net', value: ''},
        EXP23: {type: 'net', value: ''},
        EXP24: {type: 'net', value: ''},
    },
    body: p => `
(module SOP65P640X120-24N (layer ${p.layer}.Cu) (tedit 64819EE8)
  (attr smd)
  ${p.at /* parametric position */}
(fp_text reference "${p.ref}" (at -3.6 0 ${-90 + p.rot}) (layer ${p.layer}.SilkS) ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
        )
  (pad 1 smd roundrect (roundrect_rratio 0.05) (at -2.87 -3.575 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP1.str})
  (pad 2 smd roundrect (roundrect_rratio 0.05) (at -2.87 -2.925 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP2.str})
  (pad 3 smd roundrect (roundrect_rratio 0.05) (at -2.87 -2.275 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP3.str})
  (pad 4 smd roundrect (roundrect_rratio 0.05) (at -2.87 -1.625 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP4.str})
  (pad 5 smd roundrect (roundrect_rratio 0.05) (at -2.87 -0.975 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP5.str})
  (pad 6 smd roundrect (roundrect_rratio 0.05) (at -2.87 -0.325 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP6.str})
  (pad 7 smd roundrect (roundrect_rratio 0.05) (at -2.87 0.325 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP7.str})
  (pad 8 smd roundrect (roundrect_rratio 0.05) (at -2.87 0.975 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP8.str})
  (pad 9 smd roundrect (roundrect_rratio 0.05) (at -2.87 1.625 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP9.str})
  (pad 10 smd roundrect (roundrect_rratio 0.05) (at -2.87 2.275 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP10.str})
  (pad 11 smd roundrect (roundrect_rratio 0.05) (at -2.87 2.925 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP11.str})
  (pad 12 smd roundrect (roundrect_rratio 0.05) (at -2.87 3.575 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP12.str})
  (pad 13 smd roundrect (roundrect_rratio 0.05) (at 2.87 3.575 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP13.str})
  (pad 14 smd roundrect (roundrect_rratio 0.05) (at 2.87 2.925 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP14.str})
  (pad 15 smd roundrect (roundrect_rratio 0.05) (at 2.87 2.275 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP15.str})
  (pad 16 smd roundrect (roundrect_rratio 0.05) (at 2.87 1.625 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP16.str})
  (pad 17 smd roundrect (roundrect_rratio 0.05) (at 2.87 0.975 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP17.str})
  (pad 18 smd roundrect (roundrect_rratio 0.05) (at 2.87 0.325 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP18.str})
  (pad 19 smd roundrect (roundrect_rratio 0.05) (at 2.87 -0.325 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP19.str})
  (pad 20 smd roundrect (roundrect_rratio 0.05) (at 2.87 -0.975 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP20.str})
  (pad 21 smd roundrect (roundrect_rratio 0.05) (at 2.87 -1.625 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP21.str})
  (pad 22 smd roundrect (roundrect_rratio 0.05) (at 2.87 -2.275 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP22.str})
  (pad 23 smd roundrect (roundrect_rratio 0.05) (at 2.87 -2.925 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP23.str})
  (pad 24 smd roundrect (roundrect_rratio 0.05) (at 2.87 -3.575 ${p.rot}) (size 1.57 0.41) (layers ${p.layer}.Cu F.Mask F.Paste) ${p.EXP24.str})
  (fp_circle (center -4.44 -3.985) (end -4.34 -3.985) (layer ${p.layer}.SilkS) (width 0.2))
  (fp_circle (center -4.44 -3.985) (end -4.34 -3.985) (layer ${p.layer}.Fab) (width 0.2))
  (fp_line (start -2.2 -3.9) (end 2.2 -3.9) (layer ${p.layer}.Fab) (width 0.127))
  (fp_line (start -2.2 3.9) (end 2.2 3.9) (layer ${p.layer}.Fab) (width 0.127))
  (fp_line (start -2.2 -4.1) (end 2.2 -4.1) (layer ${p.layer}.SilkS) (width 0.127))
  (fp_line (start -2.2 4.1) (end 2.2 4.1) (layer ${p.layer}.SilkS) (width 0.127))
  (fp_line (start -2.2 -3.9) (end -2.2 3.9) (layer ${p.layer}.Fab) (width 0.127))
  (fp_line (start 2.2 -3.9) (end 2.2 3.9) (layer ${p.layer}.Fab) (width 0.127))
  (fp_line (start -3.905 -4.15) (end 3.905 -4.15) (layer ${p.layer}.CrtYd) (width 0.05))
  (fp_line (start -3.905 4.15) (end 3.905 4.15) (layer ${p.layer}.CrtYd) (width 0.05))
  (fp_line (start -3.905 -4.15) (end -3.905 4.15) (layer ${p.layer}.CrtYd) (width 0.05))
  (fp_line (start 3.905 -4.15) (end 3.905 4.15) (layer ${p.layer}.CrtYd) (width 0.05))
)
     `
}
