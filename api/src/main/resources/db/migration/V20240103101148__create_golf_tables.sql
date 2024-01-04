create table golf
(
    id            uuid         default public.uuid_generate_v4() not null,
    name          varchar(255),
    image         varchar(255),
    label         varchar(1024),
    price         float                                          not null,
    location      varchar(255),
    latitude      float,
    longitude     float,
    yard          varchar(255),
    opened        varchar(255),
    holes         varchar(255),
    par           varchar(255),
    driving_range varchar(255),
    opening_year  varchar(255),
    yard_designer varchar(255),
    is_favorite   boolean      default false,
    is_active     boolean      default true,
    created_at    timestamp    default CURRENT_TIMESTAMP,
    created_by    varchar(255)                                   not null,
    updated_at    timestamp,
    updated_by    varchar(255) default NULL:: character varying

);


create table golf_image
(
    id         uuid         default public.uuid_generate_v4() not null,
    golf_id    uuid         default public.uuid_generate_v4() not null,
    is_active  boolean      default true,
    target     varchar(2555),
    priority   integer,
    created_at timestamp    default CURRENT_TIMESTAMP,
    created_by varchar(255)                                   not null,
    updated_at timestamp,
    updated_by varchar(255) default NULL:: character varying
);


create table golf_content
(
    id           uuid         default public.uuid_generate_v4() not null,
    golf_id      uuid         default public.uuid_generate_v4() not null,
    content_type varchar(255),
    priority     integer,
    value        text                                           not null,
    is_active    boolean      default true,
    created_at   timestamp    default CURRENT_TIMESTAMP,
    created_by   varchar(255)                                   not null,
    updated_at   timestamp,
    updated_by   varchar(255) default NULL:: character varying
);

create table golf_price
(
    id         uuid         default public.uuid_generate_v4() not null,
    golf_id    uuid         default public.uuid_generate_v4() not null,
    is_active  boolean      default true,
    price      float,
    label      varchar(255),
    priority   integer,
    created_at timestamp    default CURRENT_TIMESTAMP,
    created_by varchar(255)                                   not null,
    updated_at timestamp,
    updated_by varchar(255) default NULL:: character varying
);