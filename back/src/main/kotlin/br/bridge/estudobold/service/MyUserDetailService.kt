package br.bridge.estudobold.service

import br.bridge.estudobold.model.Role
import br.bridge.estudobold.model.User
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service
import java.util.ArrayList
import java.util.HashSet
import javax.transaction.Transactional

@Service
class MyUserDetailsService : UserDetailsService {
    @Autowired
    private val userService: UserService? = null

    @Transactional
    @Throws(UsernameNotFoundException::class)
    override fun loadUserByUsername(userName: String): UserDetails {
        val user: User? = userService!!.findUserByUserName(userName)
        val authorities = user?.roles?.let { getUserAuthority(it) }
        return buildUserForAuthentication(user, authorities)
    }

    private fun getUserAuthority(userRoles: Set<Role>): List<GrantedAuthority> {
        val roles: MutableSet<GrantedAuthority> = HashSet()
        for (role in userRoles) {
            roles.add(SimpleGrantedAuthority(role.role))
        }
        return ArrayList(roles)
    }

    private fun buildUserForAuthentication(user: User?, authorities: List<GrantedAuthority>?): UserDetails {
        return org.springframework.security.core.userdetails.User(
            user?.userName, user?.password,
            user?.active!!, true, true, true, authorities
        )
    }
}