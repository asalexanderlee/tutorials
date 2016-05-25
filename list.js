var options = {
  valueNames: [ 'name', 'born' ],
  item: '<li><h3 class="name"></h3><p class="born"></p></li>'
};

var values = [{
    name: 'Ashley Alexander-Lee',
    born: 1995
  },
  {
    name: 'Hermon Mulat',
    born: 1995
  },
  {
    name: 'Katy Williams',
    born: 1995
}];

var userList = new List('users', options, values);

userList.add({
  name: "Gustaf Lindqvist",
  born: 1983
});
