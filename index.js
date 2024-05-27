const table = document.querySelector("#tblBingo")
const letter = document.querySelectorAll(".tblLetter")

const winningPositions = [
	[0, 1, 2, 3, 4,],
	[5, 6, 7 ,8, 9,],
	[10, 11, 12, 13, 14],
	[15, 16, 17, 18, 19],
	[20, 21, 22, 23, 24],
	[0, 5, 10, 15, 20],
	[1, 6, 11, 16, 21],
	[2, 7, 12, 17, 22],
	[3, 8 ,13 ,18, 23],
	[4, 9, 14, 19, 24],
	[0, 6, 12, 18, 24],
	[4, 8, 12, 16, 20],
]

const arr = [
	"US national anthem on the kazoo",
	"Free supa brigade",
	"Alban pregnancy mention",
	"Karlach mention",
	"Dead body hyjinks mentioned",
	"Framerate doko",
	"“Get down badabdabdba”",
	"Yeehaw escapes",
	"“Nyo!”",
	"AO3 era mentioned",
	"Iluna Institute story",
	"Aia fell down again",
	"“Shut the fuck up Gwently!”",
	"Millies hopes and dreams appearance",
	"Nakamare moment/mention",
	"Angelfeesh moment/mention",
	"Bromare mention",
	"Ms. Amare voice",
	"“Yaaass, slaaay” in Ms. Amare voice",
	"Bobert roll",
	"Sexual comment immediately followed by profusely apologizing",
	"Scrunkle appearance",
	"“I'm going to glue your asshole shut”",
	"“Mods, twist their balls”",
	"Skinless in the sewers discussion",
	"Live goob reaction",
	"Calls chat dorks",
	"Akasupa!",
	"Mic sniff",
	"Egg",
	"No nose",
	"“You have no maidens”",
	"“I cant read/I'm illiterate”",
	"Yaoi discussion",
	"Yuri discussion",
	"Ancient meme mention",
	"Warhammer mention",
	"Calling some twink babygirl or fuckable",
	"Financial literacy",
	"Burp on mute",
	"“Me and my girlies”",
	"Papamare mention",
	"Mamamare mention",
	"“ueueueueue” making fun of prechat",
	"Aia in prechat",
	"“Chat stop crying/pissing”",
	"“Chat stop kissing”",
	"Snackie break",
	"Pronouncing things wrong on purpose",
	"Swedish impression",
	"Creamsicle mention",
	"Appreciation for other members",
	"Dissing YouTube",
	"“Wait I'm picking my nose”",
	"Fan art callout",
	"Blank supa",
	"“I'm having a stroke”",
	"Poorly timed raid",
	"Lies about ending stream soon",
	"“You smell pregnant/fertile”",
	"“Pregnancy pheremones”",
	"Singing",
	"Jollibee’s mention",
	"Reverb",
	"Forklift certification mentioned",
	"Daipan related hand ouchies",
	"“Grabbable waist”",
	"Women in armor mention",
	"🅱",
	"Gets scared by something completely harmless",
	"“hmpf!” with pouty face toggle",
	"“Chippy”",
	"“Tummy hurty”",
	"“No im a gigachad!” (she's not)",
	"“I'm not a dork!” (she is)",
	"Falling for a trick supa",
	"“Divine smiiiite!!”",
	"“I cast testicular torsion”",
	"Snort (tskr)",
	"Denny’s parking lot mentioned",
	"Shower orange mentioned",
	"Arson mentioned",
	"“Hell yeah brother”",
	"Pantsless",
	"Death drop mention",
	"“Wub!”",
	"Lap rights",
	"Lap rights REVOKED",
	"Surprise supa kiss",
	"Wink",
	"“Canada isn't real”",
	]

shuffle(arr);

function shuffle(arr) {
	let currentIndex = arr.length, randomIndex;
	
	while(currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--;

		[arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
	}

	return arr;
}

let iterator = 0;

for (i = 0; i < 5; i++) {
	let tr = document.createElement("tr")
	table.appendChild(tr)

	for (j = 0; j < 5; j++) {
		let td = document.createElement("td")
		td.id = arr[iterator].toString()
		td.style.height = "20%"
		td.style.width = "20%"
		td.classList.add("main-table-cell")

		let div = document.createElement("div")
		div.classList.add("cell-format")
		div.textContent = arr[iterator].toString()
		td.appendChild(div)
		tr.appendChild(td)
		iterator++;
	}
}

const cell = document.querySelectorAll(".main-table-cell");
let winningIterator = 0
cell.forEach(e => {
	e.addEventListener("click", () => {
		e.classList.add("strikeout");

		if(matchWin()) {
			letter[winningIterator].classList.add("show-bingo");

			winningIterator++;
		}
	})
})

function matchWin() {
	const cell = document.querySelectorAll(".main-table-cell");

	return winningPositions.some(combination => {
		let ite = 0;
		combination.forEach(index => {
			if(cell[index].classList.contains("strikeout")) ite++;
		})

		if(ite === 5) {
			let indexWin = winningPositions.indexOf(combination);
			winningPositions.splice(indexWin, 1)
		}

		return combination.every(index => {
			return cell[index].classList.contains("strikeout")
		})
	})
}

console.log(arr)