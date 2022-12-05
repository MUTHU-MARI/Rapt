import React from 'react';
function Rapt() {
	return (
		<div>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						<img src="logo.jpg"></img>
					</div>
					<li><a href="#posts">POSTS</a></li>
					<li><a href="#achievements">ACHIEVEMENTS</a></li>
					<li><a href="#events">EVENTS</a></li>
					<li><a href='#about'>ABOUT</a></li>
				</ul>

				<div class="rightNav">
					<input type="text" name="search" id="search" />
					<button class="btn btn-sm">Search</button>
				</div>
			</nav>

			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
						<h1 class="text-big">
							POSTS
						</h1>
						<p class="text-small">
							Hunting down a relevant job requires
							proper techniques for showcasing your
							potential to the employer. 
						</p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
                        ACHIEVEMENTS
						</h1>
						<p class="text-small">
							JavaScript is the world most popular
							lightweight, interpreted compiled
							programming language. 
						</p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							EVENTS
						</h1>
						<p class="text-small">
							When compared with C++, Java codes
							are generally more maintainable
							because Java does not allow many
							things which may lead to
							bad/inefficient programming if used
							incorrectly. 
						</p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							ABOUT
						</h1>
						<p class="text-small">
							Machine Learning is the field of study
							that gives computers the capability to
							learn without being explicitly
							programmed.
						</p>
					</div>
				</div>
			</section>
			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved
				</p>
			</footer>
		</div>
	)
}

export default Rapt;