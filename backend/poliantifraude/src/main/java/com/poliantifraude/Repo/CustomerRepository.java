package com.poliantifraude.Repo;

/**
 * Created by alejo on 3/14/2017.
 */
import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.poliantifraude.Model.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Long>{
    List<Customer> findByLastName(String lastName);
}
