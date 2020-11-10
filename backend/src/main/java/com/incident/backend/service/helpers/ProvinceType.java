package com.incident.backend.service.helpers;

import com.incident.backend.entity.Province;
import com.incident.backend.entity.Type;

public class ProvinceType {
    private Province province;
    private Type type;

    public ProvinceType(Province province, Type type) {
        this.province = province;
        this.type = type;
    }

    public ProvinceType() {
    }

    public Province getProvince() {
        return province;
    }

    public void setProvince(Province province) {
        this.province = province;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }
}
