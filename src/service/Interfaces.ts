export interface HeroResponse {
    id: number;
    name: string;
    localized_name: string;
    primary_attr: string;
    attack_type: string;
    roles: Array<string>;
    legs: any;
}

export interface HeroFullResponse {
        id: number;
        name: string;
        primary_attr: string;
        attack_type: string;
        roles: Array<string>,
        img: string;
        icon: string;
        base_health: number;
        base_health_regen: number;
        base_mana: number;
        base_mana_regen: number;
        base_armor: number;
        base_mr: number;
        base_attack_min: number;
        base_attack_max: number;
        base_str: number;
        base_agi: number;
        base_int: number;
        str_gain: number;
        agi_gain: number;
        int_gain: number;
        attack_range: number;
        projectile_speed: number;
        attack_rate: number;
        base_attack_time: number;
        attack_point: number;
        move_speed: number;
        turn_rate: number | null;
        cm_enabled: number | boolean;
        legs: number | null;
        day_vision: number;
        night_vision: number;
        localized_name: string
}