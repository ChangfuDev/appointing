--����ԤԼ��
--�����˿ͱ�
--������ʦ��
--������ұ�
--���������
CREATE TABLE 'service' (
	'service_id' bigint(20) NOT NULL AUTO_INCREMENT COMMENT '����ID',
	'name' varchar(100) NOT NULL COMMENT '��������',
	'price' int(10) NOT NULL COMMENT '����۸�',
	'duration' int(10) NOT NULL COMMENT '����ʱ��',
	'baber_id' bigint(20) NOT NULL COMMENT '��ʦID',
	PRIMARY KEY ('service_id'),
	FOREIGN KEY ('baber_id') REFERENCES baber('baber_id')
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8 COMMENT='�����';