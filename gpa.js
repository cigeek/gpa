var td = document.getElementsByTagName('td');

var sumGradePoints = 0, sumCredits = 0;

var gradeToPoints = {'可': 2, '良': 3, '優': 4, '秀': 5};
var regGrades = /^[可良優秀]$/;

for (var i = 0; i < td.length - 1; i++){
	if (regGrades.test(td[i + 1].textContent)) {
		var numCredits = Number(td[i].textContent);
		var points = gradeToPoints[td[i + 1].textContent];
		sumGradePoints += numCredits * points;
		sumCredits += numCredits;
		console.log(td[i - 3].textContent, numCredits, td[i + 1].textContent);
	}
}

alert('GPA: ' + sumGradePoints / sumCredits);