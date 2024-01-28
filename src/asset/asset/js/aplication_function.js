function dataFetching(url,Method,dataType,SuccessCallback,ErrorCallback) {
    $.ajax({
        url: url,
        type: Method,
        dataType: dataType,
        success: SuccessCallback,
        error: function(xhr, status, error) {
            // If an errorCallback is provided, call it with the error details
            if (typeof errorCallback === 'function') {
                errorCallback(xhr, status, error);
            }
            // Reject the Promise with the error details
            reject({ xhr: xhr, status: status, error: error });
        }
    })
}

const Msg = {
    success: function (title, text) {
        Swal.fire({
            position: "center",
            icon: "success",
            title: title,
            text: text,
            showConfirmButton: false,
            timer: 1500
        });
    },
    failed: function (title, text) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: title,
            text: text,
            showConfirmButton: false,
            timer: 1500
        });
    },
    confirm: function (title, text) {
        Swal.fire({
            title: title,
            text: text,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        })
    }
};
function Confirmation(title,text){
    Swal.fire({
        title: title,
        text: text,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
    });
}

