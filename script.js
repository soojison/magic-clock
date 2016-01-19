$(document).ready(
	function() {
		setInterval(function() {

			/* it and is are always on, so turn them on
				in the beginning of the loop */
			$('.it').addClass('glow');
			$('.is').addClass('glow');

			/* get current time */
			var dt = new Date();
			var hours = dt.getHours();
			var minutes = dt.getMinutes();

			/* parts of time marker */
			if(5 <= hours && hours < 12) {
				$('.morning, .in, .the').addClass('glow');
			} else if (12 <= hours && hours < 17) {
				$('.afternoon, .in, .the').addClass('glow');
			} else if(17 <= hours && hours < 21) {
				$('.evening, .in, .the').addClass('glow');
			}
			
			/* hours */
			//remove the glow class from all the hour elements
			//so that we can update the new time
			$('.hour *').removeClass('glow');

			//hours%12 to get the time ranging from 0~11
			switch(hours%12) {
				case 0: //midnight and 12pm
					//00:00 is midnight so we update those markers
					//otherwise we update 12 marker
					if(minutes == 0 && hours == 00) {
						$('.ofday .midnight').addClass('glow');
					} else {
						$('.hour .twelve').addClass('glow');
					}
					break;
				case 1: //1am and 1pm
					$('.hour .one').addClass('glow');
					break;
				case 2: //2am and 2pm
					$('.hour .two').addClass('glow');
					break;
				case 3: //3am and 3pm
					$('.hour .three').addClass('glow');
					break;
				case 4: //4am and 4pm
					$('.hour .four').addClass('glow');
					break;
				case 5: //5am and 5pm
					$('.hour .five').addClass('glow');
					break;
				case 6: //6am and 6pm
					$('.hour .six').addClass('glow');
					break;
				case 7: //7am and 7pm
					$('.hour .seven').addClass('glow');
					break;
				case 8: //8am and 8pm
					$('.hour .eight').addClass('glow');
					break;
				case 9: //9am and 9pm
					$('.hour .nine').addClass('glow');
					break;
				case 10: //10am and 10pm
					$('.hour .ten').addClass('glow');
					break;
				case 11: //11am and 11pm
					$('.hour .eleven').addClass('glow');
					break;
			}

			/* minutes */

			//special cases for 10~19
			if(10 <= minutes && minutes <= 19) {
				switch(minutes) {
					case 10:
						$('.minutes .ten').addClass('glow');
						break;
					case 11:
						$('.minutes .eleven').addClass('glow');
						break;
					case 12:
						$('.minutes .twelve').addClass('glow');
						break;
					case 13:
						$('.minutes .thirteen').addClass('glow');
						break;
					case 14:
						$('.minutes .fourteen').addClass('glow');
						break;
					case 15:
						$('.minutes .fifteen').addClass('glow');
						break;
					case 16:
						$('.minutes .sixteen').addClass('glow');
						break;
					case 17:
						$('.minutes .seventeen').addClass('glow');
						break;
					case 18:
						$('.minutes .eighteen').addClass('glow');
						break;
					case 19:
						$('.minutes .nineteen').addClass('glow');
						break;
				}
			} else { //otherwise minutes 00~10 and 20~59
				//clear the class so we can update the correct markers
				$('.minutes *').removeClass('glow');

				// taking care of the ones of the minute
				// use minutes%10 to get 0~9
				switch(minutes%10) {
					case 0: //if minutes == 0, then we say ~ o'clock
						$('.o, .clock').addClass('glow');
						break;
					case 1:
						$('.minutes .one').addClass('glow');
						break;
					case 2:
						$('.minutes .two').addClass('glow');
						break;
					case 3:
						$('.minutes .three').addClass('glow');
						break;
					case 4:
						$('.minutes .four').addClass('glow');
						break;
					case 5:
						$('.minutes .five').addClass('glow');
						break;
					case 6:
						$('.minutes .six').addClass('glow');
						break;
					case 7:
						$('.minutes .seven').addClass('glow');
						break;
					case 8:
						$('.minutes .eight').addClass('glow');
						break;
					case 9:
						$('.minutes .nine').addClass('glow');
						break;
				}

				// taking care of the tens of the minute
				if(19 < minutes && minutes < 30) { //20~29
					$('.minutes .twenty').addClass('glow');
				} else if (30 <= minutes && minutes < 40) { //30~39
					$('.minutes .thirty').addClass('glow');
				} else if (40 <= minutes && minutes < 50) { //40~49
					$('.minutes .forty').addClass('glow');
				} else if (50 <= minutes && minutes < 60) { //50~59
					$('.minutes .fifty').addClass('glow');
				} else { //0~9, where we say, for instance "four o' two"
					$('.minutes .oh').addClass('glow');
				}
			}	

		}, 0) //refresh time interval in milliseconds
 });