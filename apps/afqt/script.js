(function () {
  // Functions
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for (letter in currentQuestion.answers) {

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults() {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
      var afqt;
    
      switch(numCorrect){
        case 12:
          afqt = 3;
          break;
        case 13:
          afqt = 4;
          break;
        case 14:
          afqt = 4;
          break;
        case 15:
          afqt = 5;
          break;
        case 16:
          afqt = 6;
          break;
        case 17:
          afqt = 8;
          break;
        case 18:
          afqt = 10;
          break;
        case 19:
          afqt = 11;
          break;
        case 20:
          afqt = 12;
          break;
        case 21:
          afqt = 13;
          break;
        case 22:
          afqt = 13;
          break;
        case 23:
          afqt = 14;
          break;
        case 24:
          afqt = 15;
          break;
        case 25:
          afqt = 17;
          break;
        case 26:
          afqt = 18;
          break;
        case 27:
          afqt = 19;
          break;
        case 28:
          afqt = 22;
          break;
        case 29:
          afqt = 23;
          break;
        case 30:
          afqt = 25;
          break;
        case 31:
          afqt = 27;
          break;
        case 32:
          afqt = 29;
          break;
        case 33:
          afqt = 32;
          break;
        case 34:
          afqt = 35;
          break;
        case 35:
          afqt = 37;
          break;
        case 36:
          afqt = 39;
          break;
        case 37:
          afqt = 41;
          break;
        case 38:
          afqt = 44;
          break;
        case 39:
          afqt = 46;
          break;
        case 40:
          afqt = 47;
          break;
        case 41:
          afqt = 50;
          break;
        case 42:
          afqt = 56;
          break;
        case 43:
          afqt = 60;
          break;
        case 44:
          afqt = 67;
          break;
        case 45:
          afqt = 73;
          break;
        case 46:
          afqt = 79;
          break;
        case 47:
          afqt = 89;
          break;
        case 48:
          afqt = 98;
          break;
        default:
          afqt = 2;
          break;
      }






    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length} <br> Your AFQT estimate is a ` + afqt;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = 'none';
    } else {
      previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    } else {
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [{
      question: "Train A arrives at the station at 11:50 AM and leaves the station at 1:50 PM. How long does it stay in the station?",
      answers: {
        a: "1 hr",
        b: "1 hr 25 min",
        c: "2 hrs",
        d: "10 hrs",
      },
      correctAnswer: "c"
    },
    {
      question: "A restaurant buys 56 pounds of beef at $1.12/pound and 24 quarts of milk at $.90/quart. How much money was spent?",
      answers: {
        a: "$101.01 ",
        b: "$95.28 ",
        c: "$88.49 ",
        d: "$84.32 ",
      },
      correctAnswer: "d"
    },
    {
      question: "Staples sell for $.60 a box. How many boxes can be bought for $3.45?",
      answers: {
        a: "4 boxes",
        b: "5 boxes",
        c: "6 boxes",
        d: "7 boxes",
      },
      correctAnswer: "b"
    },
    {
      question: "A father walks 36 miles in 12 hours, while his son covers the same distance on a bicycle at twice the father's rate of speed. At this rate; how many miles would the bicycle rider travel in 9 hours?",
      answers: {
        a: "54 miles",
        b: "52.5 miles",
        c: "49.5 miles",
        d: "48 miles",
      },
      correctAnswer: "a"
    },
    {
      question: "If you run for 4 hours at 8 miles an hour and walk 8 hours at 2 miles an hour, how far will you have gone at the end of 12 hours?",
      answers: {
        a: "32 miles",
        b: "48 miles",
        c: "50 miles",
        d: "60 miles",
      },
      correctAnswer: "b"
    },
    {
      question: "Two automobiles start together from the same place and travel along the same route. The first averages 40 miles per hour and the second 55 miles per hour. How many miles further along the route is the second car at the end of 5 hours?",
      answers: {
        a: "55 x 5",
        b: "55 - 40",
        c: "(55 x 5) - (40 x 5)",
        d: "55/5 - 40/5",
      },
      correctAnswer: "c"
    },
    {
      question: "Maria earned $450 in 5 days. What was her average earning per day?",
      answers: {
        a: "$22.50 ",
        b: "$45.00 ",
        c: "$90.00 ",
        d: "$111.11 ",
      },
      correctAnswer: "c"
    },
    {
      question: "On the average, 1 1/3 bushels of seed are needed to plant 1 acre of wheat. How many bushels of seed would be required to plant 30 acres?",
      answers: {
        a: "40",
        b: "45",
        c: "50",
        d: "70",
      },
      correctAnswer: "a"
    },
    {
      question: "A restaurant that can hold 300 people is divided into 20 equal parts. How many people can be put in each section?",
      answers: {
        a: "10",
        b: "15",
        c: "30",
        d: "60",
      },
      correctAnswer: "b"
    },
    {
      question: "A plane left Atlanta at 4:50 and arrived at Boston in 3 hours and 15 minutes. When did it arrive in Boston?",
      answers: {
        a: "7:05 PM",
        b: "7:45 PM",
        c: "7:55 PM",
        d: "8:05 PM",
      },
      correctAnswer: "d"
    },
    {
      question: "During a sale, 20-cent candy bars were sold at 3 for 50 cents. How much is saved on 9 bars?",
      answers: {
        a: "$0.25 ",
        b: "$0.30 ",
        c: "$0.36 ",
        d: "$0.94 ",
      },
      correctAnswer: "b"
    },
    {
      question: "At 8 AM the temperature was 3 degrees below zero. By 9 AM the temperature had gone up 6 degrees, but by 10 AM it had gone down again 4 degrees. What was the temperature at 10 AM?",
      answers: {
        a: "5 degrees below zero",
        b: "1 degree below zero",
        c: "1 degree above zero",
        d: "5 degrees above zero",
      },
      correctAnswer: "b"
    },
    {
      question: "A bird flies 2/3 of a mile per minute. How many miles per hour is it flying?",
      answers: {
        a: "20 mph",
        b: "30 mph",
        c: "40 mph",
        d: "60 mph",
      },
      correctAnswer: "c"
    },
    {
      question: "A florist buys flowers at $3 a dozen and sells them at $5 a dozen. How many dozen must be sold to make a profit of $90?",
      answers: {
        a: "8",
        b: "25",
        c: "30",
        d: "45",
      },
      correctAnswer: "d"
    },
    {
      question: "Workers have packed 1,400 glasses in 7 boxes. If they pack 3 more boxes, how many glasses will they have packed in all?",
      answers: {
        a: "2,300",
        b: "2,200",
        c: "2,100",
        d: "2,000",
      },
      correctAnswer: "d"
    },
    {
      question: "If 2/3 of a pound of metal costs $6, how much does a pound cost?",
      answers: {
        a: "$5.00 ",
        b: "$9.00 ",
        c: "$12.00 ",
        d: "$18.00 ",
      },
      correctAnswer: "b"
    },
    {
      question: "On January 1, 1980 a city had 100,000 people. During the year 1,000 people died, 2,000 babies were born, 3,000 people moved out, and 10,000 moved in. How many people were in the city by the end of 1980?",
      answers: {
        a: "108,000",
        b: "107,000",
        c: "104,000",
        d: "92,000",
      },
      correctAnswer: "a"
    },
    {
      question: "A painter needs 5 gallons of paint to finish a house. He has 3 quarts and 1 pint. How much more paint does he need?",
      answers: {
        a: "3 gallons",
        b: "3 gallons, 1 pint",
        c: "4 gallons, 1 pint",
        d: "4 gallons, 1 quart",
      },
      correctAnswer: "c"
    },
    {
      question: "It takes 40 cents worth of meat to make 2 sandwiches.  What is the cost of the meat for 20 sandwiches?",
      answers: {
        a: "$4.00 ",
        b: "$3.20 ",
        c: "$2.00 ",
        d: "$1.60 ",
      },
      correctAnswer: "a"
    },
    {
      question: "A hunter shot 7 ducks.  The hunter's dog recovered 5/7 of the  ducks.  How many ducks were recovered?",
      answers: {
        a: "3",
        b: "4",
        c: "5",
        d: "6",
      },
      correctAnswer: "c"
    },
    {
      question: "A newspaper carrier collects from 5 homes each day.  If he collects $2 from each home, how many days will it take him to collect $30?",
      answers: {
        a: "3",
        b: "6",
        c: "10",
        d: "15",
      },
      correctAnswer: "a"
    },
    {
      question: "It is 90 ft from home plate to first base on a baseball diamond.  How long will it take a batter to reach first base if the batter runs at a rate of 15 ft/sec?",
      answers: {
        a: "4 seconds",
        b: "5 seconds",
        c: "6 seconds",
        d: "7 seconds",
      },
      correctAnswer: "c"
    },
    {
      question: "If an  airplane flies at an average speed of 7.5 miles per minute, in 1 1/2 hours it will have flown",
      answers: {
        a: "300 miles",
        b: "450 miles",
        c: "500 miles",
        d: "675 miles",
      },
      correctAnswer: "d"
    },
    {
      question: "A plane flies at a speed of 300 miles per hour.  How many miles does it fly in 5 hours",
      answers: {
        a: "300 x 5",
        b: "300 / 5",
        c: "300 / 60",
        d: "(300 x 5) / 60",
      },
      correctAnswer: "a"
    },
    {
      question: "If a plane can climb at 2,400 feet per minute, how many minutes are needed to climb to 60,000 feet?",
      answers: {
        a: "12",
        b: "15",
        c: "18",
        d: "25",
      },
      correctAnswer: "d"
    },
    {
      question: "A farmer owns 1,000 acres.  The farmer buys farms of 120 acres, 160 acres, and 700 acres and sells one farm of 190 acres.  How many acres does the farmer own now?",
      answers: {
        a: "980",
        b: "1,790",
        c: "1,980",
        d: "2,170",
      },
      correctAnswer: "b"
    },
    {
      question: "A radio station uses 1/6 of its time for news.  In a 12 hour day, how many hours are used for news?",
      answers: {
        a: "6",
        b: "4",
        c: "3",
        d: "2",
      },
      correctAnswer: "d"
    },
    {
      question: "A grocer bought 70 cans of corn.  She sold 10 cans that day and 15 cans the next day.  How many did she have left?",
      answers: {
        a: "60",
        b: "55",
        c: "45",
        d: "25",
      },
      correctAnswer: "c"
    },
    {
      question: "It takes 15 minutes to fill a 375-gallon tank with oil.  How many gallons are pumped into the tank in 1 minute?",
      answers: {
        a: "25",
        b: "30",
        c: "36",
        d: "94",
      },
      correctAnswer: "a"
    },
    {
      question: "A used car costs $2,200 cash, or $600 down and $100 a month for 20 months.  How much money do you save by paying cash?",
      answers: {
        a: "$200 ",
        b: "$300 ",
        c: "$400 ",
        d: "$600 ",
      },
      correctAnswer: "c"
    },
    {
      question: "A store had 600 pounds of feed.  After delivering equal amounts to 4 farmers, there are 60 pounds left.  How many pounds did each farmer receive?",
      answers: {
        a: "360",
        b: "165",
        c: "150",
        d: "135",
      },
      correctAnswer: "d"
    },
    {
      question: "For a $60 coat there is an additional 10% charge when the coat is bought on credit.  What is the total cost to a credit customer?",
      answers: {
        a: "$54.00 ",
        b: "$60.60 ",
        c: "$66.00 ",
        d: "$66.60 ",
      },
      correctAnswer: "c"
    },
    {
      question: "If bricks weigh 4.5 pounds each, how many pounds will 200 bricks weigh?",
      answers: {
        a: "900",
        b: "850",
        c: "450",
        d: "400",
      },
      correctAnswer: "a"
    },
    {
      question: "Tom saves $750 a year.  Bill saves $60 a month.  How much more does Tom save a year than Bill?",
      answers: {
        a: "$30 ",
        b: "$60 ",
        c: "$360 ",
        d: "$690 ",
      },
      correctAnswer: "a"
    },
    {
      question: "A boy has 10 cookies.  His sister has 2.5 times as many.  How many does the sister have?",
      answers: {
        a: "12.5",
        b: "20.5",
        c: "25",
        d: "25.5",
      },
      correctAnswer: "c"
    },
    {
      question: "A carpenter uses 12 nails for each board.  If there are 48 nails in a pound, how many pounds would be used for 100 boards?",
      answers: {
        a: "25",
        b: "30",
        c: "40",
        d: "48",
      },
      correctAnswer: "a"
    }, {
      question: "If a doctor gives 100 patients who complain of pain a simple sugar pill, he can be sure that 33 of them will feel better. Pain experts have known for a long time that people who respond to placebos also get more relief from narcotics than do those who don't show the 'placebo effect'. Now research is being done to determine whether the placebo response is all in the head or whether the inert pills have physical effects after all.  <br> Which of the following sentences best describes this paragraph?",
      "Type": "Reading",
      answers: {
        a: "All pain victims show the same response to placebos",
        b: "Patients get more relief from placebos than narcotics",
        c: "Placebos may have more than just psychological effects",
        d: "It is well known how placebos work",
      },
      correctAnswer: "c"
    },
    {
      question: "Halfway houses are special community residences in which individuals are participating, decision-making residents. Most residents of these increasingly common facilities use them as a transition point between their stay in a mental hospital and their return home; they usually leave within a year. <br> In this way, halfway houses:",
      "Type": "Reading",
      answers: {
        a: "Are increasingly replacing mental institutions.",
        b: "Are not successful because residents seldom stay long.",
        c: "Help smooth the way from instituition living to life on the outside.",
        d: "Save patients the effort and worry of making decisions.",
      },
      correctAnswer: "c"
    },
    {
      question: "Social science is often hampered by the fact that people are hesitant to discuss their beliefs for fear of ridicule. This is the case in research on folk medical practices, particularly when the subjects know that society in general and health care professionals in particular devalue such folk practices. Practitioners of folk medicine are often less than eager to share their knowledge, in part because they wish to avoid exploitation of their knowledge and in part for fear of criticism. <br> According to this paragraph, which one of the following statements is true?",
      "Type": "Reading",
      answers: {
        a: "Research has found that folk medicine is harmful to one's health.",
        b: "Social science considers folk medicine of too little value to research.",
        c: "The element of fear can hinder social science research.",
        d: "People won't discuss folk medical practices because they are illegal.",
      },
      correctAnswer: "c"
    },
    {
      question: "Studies have shown that the amount of income people earn is directly related to the amount of education they have received, with the higher level of education, the higher the average annual income. For this reason education, though it cannot solve the immediate needs of employment, housing, medical care, and legal advice, is essential in solving the long-range problem of poverty. <br> According to this paragraph, which one of the following statements is true?",
      "Type": "Reading",
      answers: {
        a: "There is a direct relationship between amount of education and income.",
        b: "Education can solve all the problems of poverty.",
        c: "The immediate need of people with low incomes is education.",
        d: "There is a direct correlation between a person's income and intelligence.",
      },
      correctAnswer: "a"
    },
    {
      question: "Just as two colors will, when carefully mixed, form a third and different color (yellow and blue, for example, produce green), so too it is sometimes possible to see in the cooperative efforts of living things a resultant accomplishment that defies description on the basis of the characteristics of the creatures involved.  A description of the traits and performances of the individual members of a hive of honeybees or a championship athletic team hardly serves to describe the results of their joint efforts.  <br> Which of the following sentences best describes this paragraph?",
      "Type": "Reading",
      answers: {
        a: "Two is company while three is a crowd.",
        b: "The race goes to the swift.",
        c: "A bird in the hand is worth two in the bush.",
        d: "The whole is greater than the sum of its parts.",
      },
      correctAnswer: "d"
    },
    {
      question: "It is easy to distinguish between education and propaganda. The former aims at independence of judgment the latter supplies ready-made judgments for the unthinking.  Education is a slow process of development, but propaganda aims at quick responses.  One strives to produce individual responsibility and an open mind while the other, using mass effects, strives to produce a closed one. <br> The author of the paragraph believes that ",
      "Type": "Reading",
      answers: {
        a: "in an open society education and propaganda are mutually compatible.",
        b: "education tells people what to think and propaganda teaches them how to think",
        c: "education teaches people how to think and propaganda tells them what to think",
        d: "propaganda techniques are more effective when applied on a small scale",
      },
      correctAnswer: "c"
    },
    {
      question: "Mick Jagger is a man who measures up to the role.  He is continually in the center. All questions and answers are conveyed to and through him.  If he is not directly in the heart of a discussion, people automatically fill him in on what is being said.  Without any noticeable ceremony, doors are opened for him.  People let him walk in front of them.  Not just because he's a star, but because Jagger has this notion about himself which has a powerful impact on every moment of his life; that he is special. <br> Which of the following statements is true, according to the passage?",
      "Type": "Reading",
      answers: {
        a: "People make a huge fuss about opening doors for Jagger",
        b: "Jagger slips in and out of his 'star' role",
        c: "Jagger is always the focus of attention in a group.",
        d: "Jagger does not truly believe he is special.",
      },
      correctAnswer: "c"
    },
    {
      question: "One of the most important areas of learning is the continual development of attitudes.  Emotional reactions as well as logical thought processes effectively change the behavior of most people throughout the course of their lives. <br> <strong>The burnt child fears the fire</strong> is just one example that points to the fact that attitudes stem from:",
      "Type": "Reading",
      answers: {
        a: "logic",
        b: "experience",
        c: "fire",
        d: "intelligence",
      },
      correctAnswer: "b"
    },
    {
      question: "<strong>Intact</strong> most nearly means",
      answers: {
        a: "reversed",
        b: "unchanged",
        c: "moved",
        d: "abstract",
      },
      correctAnswer: "b"
    },
    {
      question: "<strong>Instigate</strong> most nearly means",
      answers: {
        a: "cut off",
        b: "return",
        c: "spur on",
        d: "remind",
      },
      correctAnswer: "c"
    },
    {
      question: "His <strong>apparel</strong> was expensive.",
      answers: {
        a: "equipment",
        b: "apartment",
        c: "luggage",
        d: "clothing",
      },
      correctAnswer: "d"
    },
    {
      question: "It will <strong>arouse</strong> their interest.",
      answers: {
        a: "sustain",
        b: "restore",
        c: "excite",
        d: "expand",
      },
      correctAnswer: "c"
    },
    {
      question: "Their <strong>zeal</strong> was great.",
      answers: {
        a: "resentment",
        b: "panic",
        c: "enthusiasm",
        d: "leisure",
      },
      correctAnswer: "c"
    },
    {
      question: "He was the <strong>donor</strong> of a large trophy.",
      answers: {
        a: "maker",
        b: "winner",
        c: "giver",
        d: "receiver",
      },
      correctAnswer: "c"
    },
    {
      question: "She will <strong>disclose</strong> the plan.",
      answers: {
        a: "adopt",
        b: "study",
        c: "outline",
        d: "reveal",
      },
      correctAnswer: "d"
    },
    {
      question: "The room was in <strong>utter</strong> confusion.",
      answers: {
        a: "complete",
        b: "noisy",
        c: "disorderly",
        d: "considerable",
      },
      correctAnswer: "a"
    },
    {
      question: "The reply was <strong>sufficient</strong>.",
      answers: {
        a: "immediate",
        b: "adequate",
        c: "final",
        d: "obscure",
      },
      correctAnswer: "b"
    },
    {
      question: "<strong>Hurdle</strong> most nearly means:",
      answers: {
        a: "corral",
        b: "error",
        c: "ball",
        d: "obstacle",
      },
      correctAnswer: "d"
    },
    {
      question: "<strong>Debris</strong> most nearly means: ",
      answers: {
        a: "errata",
        b: "litter",
        c: "tirade",
        d: "minute detail",
      },
      correctAnswer: "b"
    },
    {
      question: "<strong>Larceny</strong> most nearly means: ",
      answers: {
        a: "assault",
        b: "mayhem",
        c: "murder",
        d: "theft",
      },
      correctAnswer: "d"
    },
    {
      question: "<strong>Rivet</strong> most nearly means:",
      answers: {
        a: "squeak",
        b: "fasten",
        c: "steal",
        d: "obstacle",
      },
      correctAnswer: "b"
    },
    {
      question: "We will <strong>resist</strong> the charge.",
      answers: {
        a: "accept",
        b: "explain",
        c: "recognize",
        d: "oppose",
      },
      correctAnswer: "d"
    },
    {
      question: "<strong>Siphon</strong> most nearly means: ",
      answers: {
        a: "explode",
        b: "withdraw",
        c: "corrode",
        d: "secure",
      },
      correctAnswer: "b"
    },
    {
      question: "<strong>Sinister</strong> most nearly means:",
      answers: {
        a: "honest",
        b: "ignorant",
        c: "reliable",
        d: "evil",
      },
      correctAnswer: "d"
    },
    {
      question: "<strong>Evict</strong> most nearly means: ",
      answers: {
        a: "expel",
        b: "deny",
        c: "defeat",
        d: "imprison",
      },
      correctAnswer: "a"
    },
    {
      question: "<strong>Turmoil</strong> most nearly means: ",
      answers: {
        a: "swelling",
        b: "unrest",
        c: "grease",
        d: "anger",
      },
      correctAnswer: "b"
    },
    {
      question: "<strong>Perimeter</strong> most nearly means:",
      answers: {
        a: "measure of volume",
        b: "accurate clock",
        c: "kind of flower",
        d: "outer boundary",
      },
      correctAnswer: "d"
    },
    {
      question: "<strong>Inhabit</strong> most nearly means: ",
      answers: {
        a: "acquire",
        b: "live in",
        c: "forbid from",
        d: "belong to",
      },
      correctAnswer: "b"
    },
    {
      question: "The building was <strong>immense</strong>.",
      answers: {
        a: "old",
        b: "enormous",
        c: "attractive",
        d: "impressive",
      },
      correctAnswer: "b"
    },
    {
      question: "<strong>Novice</strong> most nearly means: ",
      answers: {
        a: "gadget",
        b: "priest",
        c: "nursemaid",
        d: "beginner",
      },
      correctAnswer: "d"
    },
    {
      question: "<strong>Savory</strong> most nearly means:",
      answers: {
        a: "healthful",
        b: "helpful",
        c: "tasty",
        d: "clean",
      },
      correctAnswer: "c"
    },
    {
      question: "The inexpensive upholstery was probably <strong>simulated</strong> leather",
      answers: {
        a: "genuine",
        b: "imitation",
        c: "recycled",
        d: "flawed",
      },
      correctAnswer: "b"
    },
    {
      question: "<strong>Reimburse</strong> most nearly means: ",
      answers: {
        a: "plead",
        b: "allow",
        c: "repay",
        d: "remove",
      },
      correctAnswer: "c"
    },
    {
      question: "The coat was made from <strong>coarse</strong> material.",
      answers: {
        a: "drab",
        b: "rough",
        c: "light",
        d: "cheap",
      },
      correctAnswer: "b"
    },
    {
      question: "The <strong>corridors</strong> were wide.",
      answers: {
        a: "porches",
        b: "stairs",
        c: "halls",
        d: "doors",
      },
      correctAnswer: "c"
    },
    {
      question: "The child was <strong>concealed</strong> in the woods.",
      answers: {
        a: "buried",
        b: "injured",
        c: "lost",
        d: "hidden",
      },
      correctAnswer: "d"
    },
    {
      question: "The reply was <strong>inadequate</strong>.",
      answers: {
        a: "immediate",
        b: "sufficient",
        c: "final",
        d: "obscure",
      },
      correctAnswer: "d"
    },
    {
      question: "His cuffs were <strong>smudged</strong>.",
      answers: {
        a: "soiled",
        b: "starched",
        c: "ragged",
        d: "wrinkled",
      },
      correctAnswer: "a"
    },
    {
      question: "The clerk provided <strong>precise</strong> information.",
      answers: {
        a: "usable",
        b: "exact",
        c: "valuable",
        d: "detailed",
      },
      correctAnswer: "b"
    },
    {
      question: "The man did not <strong>desire</strong> the food.",
      answers: {
        a: "need",
        b: "want",
        c: "order",
        d: "eat",
      },
      correctAnswer: "b"
    },
    {
      question: "The <strong>implement</strong> was heavy.",
      answers: {
        a: "tool",
        b: "desk",
        c: "sofa",
        d: "boulder",
      },
      correctAnswer: "a"
    },
    {
      question: "She spoke in a <strong>gruff</strong> manner.",
      answers: {
        a: "sarcastic",
        b: "mumbling",
        c: "soothing",
        d: "harsh",
      },
      correctAnswer: "d"
    },
    {
      question: "We met the <strong>prospective</strong> buyer.",
      answers: {
        a: "inquisitive",
        b: "wealthy",
        c: "perceptive",
        d: "possible",
      },
      correctAnswer: "d"
    },
    {
      question: "<strong>Entice</strong> most nearly means: ",
      answers: {
        a: "argue",
        b: "sour",
        c: "present",
        d: "lure",
      },
      correctAnswer: "d"
    },
    {
      question: "She played the clarinet as part of a <strong>quartet</strong>.",
      answers: {
        a: "band",
        b: "foursome",
        c: "group",
        d: "team",
      },
      correctAnswer: "b"
    },
    {
      question: "The students' responses <strong>irked</strong> the teacher.",
      answers: {
        a: "convinced",
        b: "confused",
        c: "disheartened",
        d: "annoyed",
      },
      correctAnswer: "d"
    },
    {
      question: "We will <strong>oppose</strong> the change.",
      answers: {
        a: "accept",
        b: "explain",
        c: "recognize",
        d: "resist",
      },
      correctAnswer: "d"
    },
    {
      question: "The <strong>prognosis</strong> could not be determined until after the surgery.",
      answers: {
        a: "total cost",
        b: "outlook",
        c: "disease",
        d: "danger",
      },
      correctAnswer: "b"
    },
    {
      question: "<strong>Obliterate</strong> most nearly means: ",
      answers: {
        a: "translate",
        b: "scatter",
        c: "wipe out",
        d: "blame",
      },
      correctAnswer: "c"
    },
    {
      question: "It was a <strong>strict</strong> ruling.",
      answers: {
        a: "liberal",
        b: "logical",
        c: "complex",
        d: "rigid",
      },
      correctAnswer: "d"
    },
    {
      question: "The <strong>pillar</strong> was made of wood.",
      answers: {
        a: "column",
        b: "dock",
        c: "panel",
        d: "railing",
      },
      correctAnswer: "a"
    },
    {
      question: "<strong>Vouch</strong> most nearly means:",
      answers: {
        a: "hide",
        b: "uncover",
        c: "penetrate",
        d: "affirm",
      },
      correctAnswer: "d"
    },
    {
      question: "<strong>Periodic</strong> most nearly means.",
      answers: {
        a: "ending",
        b: "crossing",
        c: "recurring",
        d: "consecutive",
      },
      correctAnswer: "c"
    },
    {
      question: "<strong>Rigid</strong> most nearly means: ",
      answers: {
        a: "virtuous",
        b: "firm",
        c: "just",
        d: "unpleasant",
      },
      correctAnswer: "b"
    }
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();