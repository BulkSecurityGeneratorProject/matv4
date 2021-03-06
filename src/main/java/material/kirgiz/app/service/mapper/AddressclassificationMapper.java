package material.kirgiz.app.service.mapper;

import material.kirgiz.app.domain.*;
import material.kirgiz.app.service.dto.AddressclassificationDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Addressclassification and its DTO AddressclassificationDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface AddressclassificationMapper extends EntityMapper<AddressclassificationDTO, Addressclassification> {


    @Mapping(target = "addressCategories", ignore = true)
    Addressclassification toEntity(AddressclassificationDTO addressclassificationDTO);

    default Addressclassification fromId(Long id) {
        if (id == null) {
            return null;
        }
        Addressclassification addressclassification = new Addressclassification();
        addressclassification.setId(id);
        return addressclassification;
    }
}
