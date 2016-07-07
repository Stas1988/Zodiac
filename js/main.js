var signs = [
	{
		signName: "aries",
		attributes: "Independent, Generous, Optimistic, Enthusiastic, Courageous",
		image: "img/aries.jpg"

	},
	{
		signName: "taurus",
		attributes: "Dependable, Persistent, Loyal, Patient, Generous",
		image: "img/taurus.jpg"
	},
	{
		signName: "gemini",
		attributes: "Energetic, Clever, Imaginative, Witty, Adaptable",
		image: "img/gemini.jpg"
	},
	{
		signName: "cancer",
		attributes: " Loyalty, Dependable, Caring, Adaptable, Responsive",
		image: "img/cancer.jpg"
	},
	{
		signName: "leo",
		attributes: "Confident, Ambitious, Generous, Loyal ,Encouraging",
		image: "img/leo.jpg"
	},
	{
		signName: "virgo",
		attributes: "Analytical, Observant, Helpful, Reliable, Precise",
		image: "img/virgo.jpg"
	},
	{
		signName: "libra",
		attributes: "Diplomatic, Graceful, Peaceful, Idealistic, Hospitable",
		image: "img/libra.jpg"
	},
	{
		signName: "scorpio",
		attributes: "Loyal, Passionate, Resourceful, Observant, Dynamic",
		image: "img/scorpio.jpg"
	},
	{
		signName: "sagittarius",
		attributes: "Independence",
		image: "img/sagittarius.jpg"
	},
	{
		signName: "capricornus",
		attributes: "responsible, patient, ambitious, resourceful, loyal",
		image: "img/capricornus.jpg"
	},
	{
		signName: "aquarius",
		attributes: "Witty, Clever, Humanitarian, Inventive, Original",
		image: "img/aquarius.jpg"
	},
	{
		signName: "pisces",
		attributes: "Compassionate, Adaptable, Accepting, Devoted, Imaginative",
		image: "img/pisces.jpg"
	}
]

function getSign() {
	var signName = document.getElementById("signName").value.toLowerCase()
	
	for (var i = 0; i < signs.length; i++) {
		if (signName === signs[i].signName){
			document.getElementById("yourSign").textContent = signs[i].signName 
			document.getElementById("icon").src = signs[i].image
			document.getElementById("attributes").textContent = "Your attributes are " + signs[i].attributes
			return
		} else {
			document.getElementById("yourSign").textContent = "That's not one of the signs. Try again!"
			document.getElementById("attributes").textContent = ""
			document.getElementById("icon").src = ""
		}

	}
	
}


	
