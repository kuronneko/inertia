import{_ as c}from"./AppLayout.1c7b7b8f.js";import p from"./DeleteUserForm.564e44ec.js";import l from"./LogoutOtherBrowserSessionsForm.70d8a38c.js";import{S as s}from"./SectionBorder.95fb84f1.js";import f from"./TwoFactorAuthenticationForm.a30fda39.js";import u from"./UpdatePasswordForm.b9ab4ea8.js";import _ from"./UpdateProfileInformationForm.0cf9a6cc.js";import{o,c as d,w as n,a as i,e as r,b as t,f as a,F as h}from"./app.63afecfa.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ActionSection.7a3081a0.js";import"./SectionTitle.6003a622.js";import"./DangerButton.6a28f4be.js";import"./DialogModal.bc8debda.js";import"./TextInput.1deabb01.js";import"./SecondaryButton.bb4ed745.js";import"./ActionMessage.0e05e0ea.js";import"./PrimaryButton.7f9619bd.js";import"./InputLabel.98d18599.js";import"./FormSection.72042356.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{G as default};
