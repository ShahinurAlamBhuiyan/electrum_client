import '../Style.css'
import BrandDesign from '../../../components/Auth/SignIn/BrandDesign'
import SignUpFormContainer from '../../../components/Auth/SignUp/SignUpFormContainer'

const SignUp = () => {
  return (
    <div className='sign-in__container'>
      <BrandDesign />
      <SignUpFormContainer />
    </div>
  )
}

export default SignUp
