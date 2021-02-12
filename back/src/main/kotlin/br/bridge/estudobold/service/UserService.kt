package br.bridge.estudobold.service
import br.bridge.estudobold.model.Role
import br.bridge.estudobold.model.User
import br.bridge.estudobold.repository.RoleRepository
import br.bridge.estudobold.repository.UserRepository

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service
import java.util.Arrays

@Service
class UserService

@Autowired
constructor(
    private val userRepository: UserRepository,
    private val roleRepository: RoleRepository,
    private val bCryptPasswordEncoder: BCryptPasswordEncoder
) {

    fun findUserByEmail(email: String?): User? {
        return userRepository.findByEmail(email)
    }

    fun findUserByUserName(userName: String?): User? {
        return userRepository.findByUserName(userName)
    }

    fun saveUser(user: User): User {
        user.password = bCryptPasswordEncoder.encode(user.password)
        user.active = true
        val userRole: Role? = roleRepository.findByRole("ADMIN")
        user.roles = HashSet<Role>(listOf(userRole))
        return userRepository.save(user)
    }
}