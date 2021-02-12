package br.bridge.estudobold.login.controller

import br.bridge.estudobold.model.User
import br.bridge.estudobold.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Controller
import org.springframework.validation.BindingResult
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.servlet.ModelAndView
import javax.validation.Valid

@Controller
class LoginController {
    @Autowired
    private val userService: UserService? = null

    @RequestMapping(value = ["/", "/login"], method = [RequestMethod.GET])
    fun login(): ModelAndView {
        val modelAndView = ModelAndView()
        modelAndView.viewName = "login"
        return modelAndView
    }

    @RequestMapping(value = ["/registration"], method = [RequestMethod.GET])
    fun registration(): ModelAndView {
        val modelAndView = ModelAndView()
        val user = User()
        modelAndView.addObject("user", user)
        modelAndView.viewName = "registration"
        return modelAndView
    }

    @PostMapping(value = ["/registration"])
    fun createNewUser(@RequestBody user: User, bindingResult: BindingResult): ModelAndView {
        val modelAndView = ModelAndView()
        val userExists: User? = userService?.findUserByUserName(user.userName)
        if (userExists != null) {
            bindingResult
                .rejectValue(
                    "userName", "error.user",
                    "There is already a user registered with the user name provided"
                )
        }
        if (bindingResult.hasErrors()) {
            modelAndView.viewName = "registration"
        } else {
            userService?.saveUser(user)
            modelAndView.addObject("successMessage", "User has been registered successfully")
            modelAndView.addObject("user", User())
            modelAndView.viewName = "registration"
        }
        return modelAndView
    }

    @RequestMapping(value = ["/admin/home"], method = [RequestMethod.GET])
    fun home(): ModelAndView {
        val modelAndView = ModelAndView()
        val auth = SecurityContextHolder.getContext().authentication
        val user: User? = userService?.findUserByUserName(auth.name)
        modelAndView.addObject(
            "userName",
            "Welcome " + user?.userName.toString() + "/" + user?.name.toString() + " " + user?.lastName.toString() + " (" + user?.email.toString() + ")"
        )
        modelAndView.addObject("adminMessage", "Content Available Only for Users with Admin Role")
        modelAndView.viewName = "admin/home"
        return modelAndView
    }
}