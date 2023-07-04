ergogen:
	rm -rf output
	ergogen .
	ghead -n -3 output/pcbs/trone.kicad_pcb > output/pcbs/tmp.kicad_pcb
	cat routes >> output/pcbs/tmp.kicad_pcb
	echo ")" >> output/pcbs/tmp.kicad_pcb
	cat output/pcbs/tmp.kicad_pcb > output/pcbs/trone.kicad_pcb
	rm output/pcbs/tmp.kicad_pcb
	open output/pcbs/trone.kicad_pcb
