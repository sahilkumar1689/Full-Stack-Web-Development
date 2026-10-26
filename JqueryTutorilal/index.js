// jquery = jQuery is a lightweight, “write less, do more” JavaScript library that simplifies web development. It provides an easy-to-use API for common tasks, making it much easier to work with JavaScript on your website. It streamlines web development by providing a concise syntax and powerful utilities for creating interactive and dynamic web pages.

// 1. Selecting the element in jquery:
let heading = $(".heading");

// 2. Select and change the text from the selected tag:
// heading.text("hi");
// console.log(heading);
// console.log(heading.text());

// 3. Select and change the html from the selected tag:
// heading.html("<p>hi</p>");
// console.log(heading.text());

// 4. Add css in the selected tag:
// heading.css({
//     "color": "green",
//     "font-size": "2rem",
//     "background-color": "lightyellow"
// });

// 5. Add cssclasses in the selected tag:
// heading.addClass("temp1 temp2");
// heading.removeClass("temp1 temp2");

// 6. Select and change the attributes in the selected tag:
// console.log(heading.attr("class"));
// heading.attr("class","temp3");

// 7. Create new html element in the jquery and it in the html:
// const para = $("<p>").text("hello").css("color","red");

// $("body").append(para);

// 8. Different types of listener in jquery:

// 1. click(callBack):
// heading.click(()=>{
//    console.log(heading.text());
// })

// 2. hover(callBack):
// $(".btn").hover(
//   function () {
//     // mouseenter
//     $(this).css({
//       "background-color": "green",
//       padding: "10px 20px",
//     });
//   },
//   function () {
//     // mouseleave
//     $(this).css({
//       "background-color": "",
//       padding: "",
//     });
//   }
// );

// 3. Keyboard Events:
// $("#inputBox").keydown((event)=>{
//     console.log("Key Pressed:",event.key);
// })
// $("#inputBox").keyup((event)=>{
//     console.log("Key up:",event.key);
// })

// 4. change event:
// $("#inputBox").change((event)=>{
//     console.log("Value Changed:",event.target.value);
// })

// 5. on / off = on event listner is used to add multiple event to an element and off event listner is used to remove that event.
// $("#inputBox").on("change", (event) => {
//   console.log("Value Changes:", event.target.value);
// });
// $("#inputBox").off("change");

// for(let i=0;i<heading.length;i++){
//     heading[i].innerText = "hi";
//     console.log(heading[i].innerText);
// }

// 9. Get the html tag name of the selected element:

// console.log(heading.prop("tagName"));

// 10. Animation in Jquery:

// $(".btn").click(() => {
// 1. Used to add the fadeIn or Out Effect on the div.
// $("#box").fadeIn(2000).fadeOut(5000);

// 2. Used to show() or hide() the element:
// $("#box").show(1000);
// $("#box").hide(1000);

// 3. Used to slideDown() and slideUp():
// $("#box").slideDown(1000);
// $("#box").slideUp(1000);

// 4. toggle funcntions:
// $("#box").toggle(1000);
// $("#box").fadeToggle(1000);
// $("#box").slideToggle(1000);

// 4. Used to add custom animation:
//   $("#box").animate(
//     {
//       left: "250px",
//       height: "150px",
//       width: "150px",
//       opacity: 0.5,
//     },
//     1000
//   );
// });

// 11. Traversing Dom elements:
// const parent = $("#child").parent(); // #parent
// console.log(parent);
// $('#child').parents();         // #parent, #grandparent
// $('#child').siblings();        // Sibling 1, Sibling 2
// $('#parent').children();       // All <p> elements
// $('#parent').find('p');        // Same as above
// $('#child').closest('div');    // #parent

// 12. Drag and drop features = Firstly you need to import the jquery cdn links.

$(function () {
  // Make the div draggable
  $("#draggable").draggable({
    revert: "invalid",
  });

  // Make the drop zone droppable
  $("#droppable").droppable({
    accept: "#draggable",
    over: function (event, ui) {
      $(this)
        .css({
          "background-color": "rgba(255,255,255,0.5)",
        })
        .html("Release to drop.");
    },
    drop: function (event, ui) {
      $(this).css("background", "lightgreen").html("Dropped!");
    },
    out: function (event, ui) {
      $(this).css({ "background-color": "white" }).html("Select To Drag.");
    },
  });

  // Make the drop zone droppable1
  $("#droppable1").droppable({
    accept: "#draggable",
    over: function (event, ui) {
      $(this)
        .css({
          "background-color": "rgba(255,255,255,0.5)",
        })
        .html("Release to drop.");
    },
    drop: function (event, ui) {
      $(this).css("background", "lightgreen").html("Dropped!");
    },
    out: function (event, ui) {
      $(this).css({ "background-color": "white" }).html("Select To Drag.");
    },
  });
});
