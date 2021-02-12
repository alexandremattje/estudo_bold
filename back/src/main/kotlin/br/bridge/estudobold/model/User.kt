package br.bridge.estudobold.model

import lombok.AllArgsConstructor
import lombok.Builder
import lombok.Data
import lombok.Getter
import lombok.NoArgsConstructor
import javax.persistence.CascadeType
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.JoinTable
import javax.persistence.ManyToMany
import javax.persistence.Table
import javax.validation.constraints.Email
import javax.validation.constraints.NotEmpty

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private val id = 0

    @Column(name = "user_name")
    // @Length(min = 5, message = "*Your user name must have at least 5 characters")
    @NotEmpty(message = "*Please provide a user name")
    internal var userName: String? = null

    @Column(name = "email")
    @Email(message = "*Please provide a valid Email")
    @NotEmpty(message = "*Please provide an email")
    internal var email: String? = null

    @Column(name = "password")
    // @Length(min = 5, message = "*Your password must have at least 5 characters")
    @NotEmpty(message = "*Please provide your password")
    internal var password: String? = null

    @Column(name = "name")
    @NotEmpty(message = "*Please provide your name")
    internal var name: String? = null

    @Column(name = "last_name")
    @NotEmpty(message = "*Please provide your last name")
    internal var lastName: String? = null

    @Column(name = "active")
    internal var active: Boolean? = null

    @ManyToMany(cascade = [CascadeType.MERGE])
    @JoinTable(name = "user_role", joinColumns = [JoinColumn(name = "user_id")], inverseJoinColumns = [JoinColumn(name = "role_id")])
    internal var roles: Set<Role>? = null
}