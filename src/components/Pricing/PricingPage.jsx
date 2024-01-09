import React, { Component } from 'react';

class PricingPage extends Component {
  render() {
    return (
      <div className="w-[1440px] h-[1024px] relative bg-gradient-to-b from-cyan-950 to-black">
        <div className="w-[362px] h-[431px] left-[79px] top-[179px] absolute bg-stone-300 bg-opacity-25 rounded-[14px]" />
        <div className="w-[362px] h-[431px] left-[539px] top-[179px] absolute bg-stone-300 bg-opacity-25 rounded-[14px]" />
        <div className="w-[362px] h-[431px] left-[999px] top-[179px] absolute bg-stone-300 bg-opacity-25 rounded-[14px]" />
        <div className="w-[325px] h-[356px] left-[94px] top-[366px] absolute text-neutral-300 text-xl font-normal font-['Inter']">$4/month/user<br/>Up to 10 graphs<br/>Up to 500 chatbot queries</div>
        <div className="w-[325px] h-[356px] left-[558px] top-[366px] absolute text-neutral-300 text-xl font-normal font-['Inter']">$8/month/user<br/>Up to 50 graphs<br/>Up to 1000 chatbot queries<br/>Email + live chat support</div>
        <div className="w-[325px] h-[356px] left-[1021px] top-[366px] absolute text-neutral-300 text-xl font-normal font-['Inter']">Contact for price<br/>Unlimited graphs<br/>Ability to upload custom PDFs<br/>24/7 phone + email support</div>
        <div className="w-52 h-[68px] left-[146px] top-[267px] absolute text-center text-white text-[32px] font-semibold font-['Inter']">Basic Plan</div>
        <div className="w-52 h-[68px] left-[603px] top-[270px] absolute text-center text-white text-[32px] font-semibold font-['Inter']">Pro Plan</div>
        <div className="w-[282px] h-[68px] left-[1039px] top-[270px] absolute text-center text-white text-[32px] font-semibold font-['Inter']">Enterprise Plan</div>
        <div className="w-7 h-7 left-[115px] top-[215px] absolute rounded-full border-4 border-white" />
        <div className="w-7 h-7 left-[577px] top-[216px] absolute rounded-full border-4 border-white" />
        <div className="w-7 h-7 left-[1037px] top-[215px] absolute rounded-full border-4 border-white" />
        <div className="w-[417px] h-[51px] left-[-63px] top-[62px] absolute text-center text-white text-[40px] font-bold font-['DM Sans']">Pricing</div>
        <div className="w-[261px] h-[63px] left-[590px] top-[749px] absolute bg-green-600 rounded-[44px]" />
        <div className="w-[200px] h-[35px] left-[620px] top-[763px] absolute text-center text-white text-2xl font-light font-['Inter']">Proceed</div>
      </div>
    );
  }
}

export default PricingPage;
