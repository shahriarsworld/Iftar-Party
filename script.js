const inviteButton = document.getElementById("inviteButton");

inviteButton.addEventListener('click', function(){
    inviteButton.textContent = 'Invitation Sent!';
    alert('The invitation has been sent. See you at the Iftar Party!');
});

