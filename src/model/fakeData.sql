
INSERT INTO company(company_name) VALUES ('Murad_Buildings');
INSERT INTO company(company_name) VALUES ('Golden_House');
INSERT INTO company(company_name) VALUES ('Akay_City');


INSERT INTO complex(compex_name, company_id) VALUES ('NRG_Oybek', '09dc46f4-c99b-4f9f-a62d-928135a92fd2');
INSERT INTO complex(compex_name, company_id) VALUES ('Nest_One', '09dc46f4-c99b-4f9f-a62d-928135a92fd2');

INSERT INTO complex(compex_name, company_id) VALUES ('Golden_House_Mirzo_Ulugbek', 'c2686d9b-ac4e-43c4-a9cc-155b79d6ce11');
INSERT INTO complex(compex_name, company_id) VALUES ('Golden_House_Sohil', 'c2686d9b-ac4e-43c4-a9cc-155b79d6ce11');

INSERT INTO complex(compex_name, company_id) VALUES ('Akay City qo`yliq', '4a9124d7-c97b-4e9b-baac-4daebd41e2f7');
INSERT INTO complex(compex_name, company_id) VALUES ('Akay city Chorsu', '4a9124d7-c97b-4e9b-baac-4daebd41e2f7');




INSERT INTO house(overall_size, house_rooms, house_price_1kv, house_location, complex_id )
    VALUES (6100000,4,91,'Drujba Narodov 6-tor ko`cha', '3897758e-d7aa-4861-9ab5-539dd54d29eb'),
     (5000000,2,92,'Katta ko`cha', '3897758e-d7aa-4861-9ab5-539dd54d29eb'),

     (6000000,3,90,'Drujba Narodov 5-tor ko`cha', '3e619049-93c2-4c1c-9172-626976307832'),
     (6200000,4,89,' 5-ko`cha ', '3e619049-93c2-4c1c-9172-626976307832'),

     (5900000,3,90,'Drujba Narodov 3-tor ko`cha', '2b29f357-80a0-4880-a445-c605dd86d37e'),
     (4000000,1,91,'Xalqlar do`stligi 6-tor ko`cha', '2b29f357-80a0-4880-a445-c605dd86d37e'),

     (4500000,2,90,'Mustaqillik maydoni 9-tor ko`cha', '7adb9607-e658-4dd6-859a-e7d28a5f36b4'),
     (5000000,3,85,'Ko`kcha 5-tor ko`cha', '7adb9607-e658-4dd6-859a-e7d28a5f36b4'),

     (4500000,2,90,'Qo`yliq massiv1', 'ae43f572-313b-431e-bc37-f3e6460a0658'),
     (5000000,3,85,'Qo`yliq massiv2', 'ae43f572-313b-431e-bc37-f3e6460a0658'),

     (4500000,2,90,'Xadra', '4df1afe1-68c8-455c-9b7e-92d91f434f3e'),
     (5000000,3,85,'yo`ldan o`tgandan keyin', '4df1afe1-68c8-455c-9b7e-92d91f434f3e');



INSERT INTO bank (bank_name, mortgage_duration, starting_payment, bank_service) VALUES('Asia Alliance Bank', 10, 17, '2.5 mln');



