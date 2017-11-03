var count=0;
  $('#email-form').on('submit',function(){
    var name=$('#name').val();
    var mobile=$('#Mobile-Number').val();
    var email=$('#Email').val();
    var location='';
    var org=$('#Organization').val();
    var request={"name":org,"organization":org,"location":{"latitude":"", "longitude":""},
              "email":email,"mobile":mobile,"source":"WEBSITE"}
    var dataString=JSON.stringify(request);
    $.ajax({
        type:"POST",
        url:"https://accounts.loktra.com/api/v1/leads/post_leads_inbound",
        data:dataString,
        success:function(data)
        {
            $("#success").show();
            $(".form-1").html("");
            alert(data.JSON());
        },
        error:function(xhr,status,error)
        {
            alert(xhr,status);
        }
      });
   });
