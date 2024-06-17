// module for creating the contact page of restaurant.
const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.classList.add('Our Menu');

    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = "Classic cheeseburger";
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = "Ice cream";
    const menuItem3 = document.createElement('li');
    menuItem3.textContent = "Strawberry corn salsa";
    const menuItem4 = document.createElement('li');
    menuItem4.textContent = "Fried chicken";

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);
    menuList.appendChild(menuItem4);

    pageContent.appendChild(heading);
    pageContent.appendChild(menuList)
    content.appendChild(pageContent);
};

export default createMenuPage;