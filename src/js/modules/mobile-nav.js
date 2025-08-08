export default function mobileNav() {
	// Mobile nav button
	const navBtnOpen = document.querySelector('#modalOpen');
	const navBtnClose = document.querySelector('#modalClose');

	const navOverlay = document.querySelector('#mobileNavOverlay');
	const nav = document.querySelector('#mobileNav');

	function toggleMobileNav() {
		navOverlay.classList.toggle('mobile__nav-overlay--open');
		nav.classList.toggle('mobile__nav--open');
		document.body.classList.toggle('no-scroll');
	}

	navBtnOpen.onclick = toggleMobileNav;
	navBtnClose.onclick = toggleMobileNav;
	navOverlay.onclick = toggleMobileNav;
};