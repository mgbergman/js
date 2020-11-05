

$(() => {

    console.log("jQuery is ready");

    $("button").click(
        () => {
            console.log("the button is clicked!");
        });

    let value =$(".tonya").val()
    console.log(value);
    value = Number(value) + 99;
    $(".tonya").val(value);
  
});


