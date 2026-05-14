// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
    
// Simulate OTP sending flow in Node.js:


// Show “OTP Sent Successfully”
console.log("OTP Sent Successfully")
let i=9;
// Start 10-second countdown
let interval =setInterval(()=>{
    console.log(`OTP will resend in ${i} `);
    i--;
    if (i==-1){
        
        console.log("resend the otp")
        clearInterval(interval);
    }
},1000)

// Allow resend only after countdown ends
