// sidebar
const menuItems = document.querySelectorAll('.menu-item');

const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');

const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search')



const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');



// remove active class from all menu items
const changeActiveItem = () => {
	menuItems.forEach(item => {
		item.classList.remove('active');
	})
}


menuItems.forEach(item => {
	item.addEventListener('click', () => {
		changeActiveItem();
		item.classList.add('active');
		if(item.id != 'notifications'){
			document.querySelector('.notifications-popup').style.display = 'none';
		}else{
			document.querySelector('.notifications-popup').style.display = 'block';
			document.querySelector('#notifications .notification-count').style.display = 'none';
		}
	})
})


// ...........Messages............


const searchMessage = () => {
	const val = messageSearch.value.toLowerCase();
	message.forEach(chat => {
		let name = chat.querySelector('h5').textContent.toLowerCase();
		if(name.indexOf(val) != -1){
			chat.style.display = 'flex';
		}else{
			chat.style.display ='none';
		}
	})
}
// search chat
messageSearch.addEventListener('keyup', searchMessage);


// highlight message card when message menu item is clicked
messagesNotification.addEventListener('click', () => {
	messages.style.boxShadow = '0 0 1rem var(--color-primary)';
	messagesNotification.querySelector('.notification-count').style.display = 'none';	
	setTimeout(() => {
		messages.style.boxShadow = 'none';
	}, 2000);
})


//  THEME CUSTOMIZATION


const openThemeModal = () => {
	themeModal.style.display ='grid';
}

const closeThemeModal = (e) => {
	if(e.target.classList.contains('customize-theme')){
		themeModal.style.display = 'none';
	}
}

themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);


const removeSizeSelector = () => {
	fontSizes.forEach(size => {
		size.classList.remove('active');
	})
}




// ....font size....
		
fontSizes.forEach(size => {


	size.addEventListener('click',() => {
	let fontSize;
	removeSizeSelector();
	size.classList.toggle('active');
	if(size.classList.contains('font-size-1')){
		fontSize = "10px";
		root.style.setProperty('----sticky-top-left', '5.4rem');
		root.style.setProperty('----sticky-top-right', '5.4rem');
	}else if(size.classList.contains('font-size-2')){
		fontSize = "13px";
		root.style.setProperty('----sticky-top-left', '5.4rem');
		root.style.setProperty('----sticky-top-right', '-7rem');
	}else if(size.classList.contains('font-size-3')){
		fontSize = "16px";
		root.style.setProperty('----sticky-top-left', '-2rem');
		root.style.setProperty('----sticky-top-right', '-17rem');
	}else if(size.classList.contains('font-size-4')){
		fontSize = "19px";
		root.style.setProperty('----sticky-top-left', '-5rem');
		root.style.setProperty('----sticky-top-right', '-25rem');
	}else if(size.classList.contains('font-size-5')){
		fontSize = "22px";
		root.style.setProperty('----sticky-top-left', '-12rem');
		root.style.setProperty('----sticky-top-right', '-35rem');
	}
		document.querySelector('html').style.fontSize = fontSize;
	})


})