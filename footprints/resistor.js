module.exports = {
    params: {
        designator: 'R',
        from: undefined,
        to: undefined
    },
    body: p => `

    (module Resistor (layer F.Cu) (tedit 5B24D78E)


        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))


  (fp_line (start -3.1286 0) (end -2.3586 0)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 191e4511-1be9-430c-aaf6-0983b584092c))
  (fp_line (start -2.3372 -0.9652) (end -2.3372 0.9144)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 1766741a-97fb-4a43-a292-e57eb351151e))
  (fp_line (start -2.3372 0.9144) (end 2.2856 0.916)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 444790a3-231b-4704-b917-4225eb5a577b))
  (fp_line (start 2.2856 -0.9636) (end -2.3372 -0.9652)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 6550c759-5576-4435-bb43-2657755d4d97))
  (fp_line (start 2.2856 0.916) (end 2.2856 -0.9636)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 10ce12b2-e1aa-4352-b8c6-aa782779d167))
  (fp_line (start 3.0556 0) (end 2.2856 0)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp a0f7b891-2e11-4a29-a4ee-7ec4ca029f8d))
  (pad "1" thru_hole circle (at -4.6228 0) (size 1.6 1.6) (drill 0.8) (layers "*.Cu" "*.Mask") (tstamp 354483a2-966a-47e1-878d-5847ae96c6a5) ${p.from.str})
  (pad "2" thru_hole oval (at 4.4704 0) (size 1.6 1.6) (drill 0.8) (layers "*.Cu" "*.Mask") (tstamp 915ccabe-5abc-4a80-b768-b756f70e5881) ${p.to.str})

    )

    `
}
