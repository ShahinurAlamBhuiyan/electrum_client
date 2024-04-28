import '../Style.css'
import BrandDesign from '../../../components/Auth/SignIn/BrandDesign'
import SignInFormContainer from '../../../components/Auth/SignIn/SignInFormContainer'

const SignIn = () => {
  return (
    <div className='sign-in__container'>
      <BrandDesign />
      <SignInFormContainer />
    </div>
  )
}

export default SignIn
