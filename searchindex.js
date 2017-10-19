Search.setIndex({docnames:["api/demoparser","api/demoparser.entities","api/modules","demopacket","events","game_events","index","intro","user_messages"],envversion:53,filenames:["api/demoparser.rst","api/demoparser.entities.rst","api/modules.rst","demopacket.rst","events.rst","game_events.rst","index.rst","intro.rst","user_messages.rst"],objects:{"":{demoparser:[0,0,0,"-"]},"demoparser.bitbuffer":{Bitbuffer:[0,1,1,""]},"demoparser.bitbuffer.Bitbuffer":{next_dword:[0,2,1,""],read_bit:[0,2,1,""],read_bit_cell_coord:[0,2,1,""],read_bit_coord:[0,2,1,""],read_bit_normal:[0,2,1,""],read_sint_bits:[0,2,1,""],read_string:[0,2,1,""],read_uint_bits:[0,2,1,""],read_user_data:[0,2,1,""],read_var_int:[0,2,1,""]},"demoparser.bytebuffer":{Bytebuffer:[0,1,1,""]},"demoparser.bytebuffer.Bytebuffer":{read:[0,2,1,""],read_bitstream:[0,2,1,""],read_command_data:[0,2,1,""],read_command_header:[0,2,1,""],read_packet_data:[0,2,1,""],read_raw_data:[0,2,1,""],read_sequence_data:[0,2,1,""],read_short:[0,2,1,""],read_string:[0,2,1,""],read_user_command:[0,2,1,""],read_var_bytes:[0,2,1,""],read_varint:[0,2,1,""]},"demoparser.demofile":{ClassNotFoundError:[0,3,1,""],CommandError:[0,3,1,""],DemoFile:[0,1,1,""]},"demoparser.demofile.DemoFile":{add_callback:[0,2,1,""],class_by_message_name:[0,2,1,""],collect_exclusions:[0,2,1,""],collect_props:[0,2,1,""],create_string_table:[0,2,1,""],current_tick:[0,4,1,""],data_table_by_name:[0,2,1,""],emit:[0,2,1,""],entities:[0,4,1,""],flatten_data_table:[0,2,1,""],handle_data_table:[0,2,1,""],handle_demo_packet:[0,2,1,""],handle_game_event:[0,2,1,""],handle_game_event_list:[0,2,1,""],handle_packet_entities:[0,2,1,""],handle_string_table:[0,2,1,""],handle_string_tables:[0,2,1,""],handle_user_message:[0,2,1,""],instance_baselines:[0,4,1,""],parse:[0,2,1,""],parse_instance_baseline:[0,2,1,""],parse_string_table_update:[0,2,1,""],read_new_entity:[0,2,1,""],table_by_name:[0,2,1,""],table_updated:[0,2,1,""],update_string_table:[0,2,1,""]},"demoparser.entities":{base:[1,0,0,"-"],entity_list:[1,0,0,"-"],game_rules:[1,0,0,"-"],player:[1,0,0,"-"],team:[1,0,0,"-"],weapon:[1,0,0,"-"]},"demoparser.entities.base":{BaseEntity:[1,1,1,""]},"demoparser.entities.base.BaseEntity":{get_prop:[1,2,1,""],owner:[1,4,1,""],position:[1,4,1,""],server_class:[1,4,1,""],team:[1,4,1,""],team_num:[1,4,1,""],update_prop:[1,2,1,""]},"demoparser.entities.entity_list":{EntityList:[1,1,1,""]},"demoparser.entities.entity_list.EntityList":{get_by_handle:[1,2,1,""],get_by_user_id:[1,2,1,""],get_one:[1,2,1,""],insert:[1,2,1,""],new_entity:[1,2,1,""],players:[1,4,1,""],teams:[1,4,1,""]},"demoparser.entities.game_rules":{GameRules:[1,1,1,""]},"demoparser.entities.player":{Player:[1,1,1,""]},"demoparser.entities.player.Player":{armor:[1,4,1,""],cash:[1,4,1,""],health:[1,4,1,""],kills:[1,4,1,""],life_state:[1,4,1,""],name:[1,4,1,""],place:[1,4,1,""],position:[1,4,1,""],serialize:[1,2,1,""],steam_id:[1,4,1,""],view_angle:[1,4,1,""],weapon:[1,4,1,""]},"demoparser.entities.team":{Team:[1,1,1,""]},"demoparser.entities.team.Team":{clan:[1,4,1,""],name:[1,4,1,""],score:[1,4,1,""],score_first_half:[1,4,1,""],score_second_half:[1,4,1,""]},"demoparser.entities.weapon":{Weapon:[1,1,1,""]},"demoparser.entities.weapon.Weapon":{item_index:[1,4,1,""],name:[1,4,1,""],previous_owner:[1,4,1,""]},"demoparser.fields":{FixedLengthString:[0,1,1,""],SLFloat32:[0,1,1,""],UBInt32Sequence:[0,1,1,""]},"demoparser.fields.FixedLengthString":{bytes_required:[0,4,1,""],pack:[0,2,1,""],unpack:[0,2,1,""]},"demoparser.fields.SLFloat32":{PACK_FORMAT:[0,4,1,""],UNPACK_FORMAT:[0,4,1,""],unpack:[0,2,1,""]},"demoparser.props":{Decoder:[0,1,1,""]},"demoparser.props.Decoder":{decode:[0,2,1,""],decode_array:[0,2,1,""],decode_float:[0,2,1,""],decode_int64:[0,2,1,""],decode_int:[0,2,1,""],decode_special_float:[0,2,1,""],decode_string:[0,2,1,""],decode_vector:[0,2,1,""],decode_vector_xy:[0,2,1,""]},"demoparser.structures":{CommandHeader:[0,1,1,""],CommandInfo:[0,1,1,""],DemoHeader:[0,1,1,""],OriginViewAngles:[0,1,1,""],QAngle:[0,1,1,""],SplitCommandInfo:[0,1,1,""],UserInfo:[0,1,1,""],Vector:[0,1,1,""]},"demoparser.util":{parse_entity_update:[0,5,1,""],read_field_index:[0,5,1,""]},demoparser:{bitbuffer:[0,0,0,"-"],bytebuffer:[0,0,0,"-"],consts:[0,0,0,"-"],demofile:[0,0,0,"-"],entities:[1,0,0,"-"],fields:[0,0,0,"-"],props:[0,0,0,"-"],structures:[0,0,0,"-"],util:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","exception","Python exception"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:exception","4":"py:attribute","5":"py:function"},terms:{"byte":0,"char":0,"class":[0,1,4],"const":2,"default":0,"final":1,"float":0,"function":0,"int":0,"long":0,"new":[1,4],"null":0,"return":[0,1],"short":0,"var":1,"void":0,Dying:1,For:[0,1],Not:1,One:4,The:[0,4],Then:0,These:0,abc:1,achievement_earn:[4,5],achievement_earned_loc:[4,5],achievement_ev:[4,5],achievement_incr:[4,5],achievement_info_load:[4,5],achievement_write_fail:[4,5],achievementev:[4,8],add_bullet_hit_mark:[4,5],add_callback:[0,4],add_player_sonar_icon:[4,5],added:[0,4],adjustmonei:[4,8],after:0,aliv:1,all:[0,1,4],also:0,ammo_pickup:[4,5],angl:1,ani:0,anim:1,announce_phase_end:[4,5],api:6,appear:0,appropri:0,approprit:[0,4],area:1,arg:0,argument:[0,4],armor:1,arrai:0,assassination_target_kil:[4,5],assert:4,base:[0,2],baseent:1,basefield:0,basefixedbytesequ:0,baselin:[0,4],baseline_cr:[0,4],basestructfield:0,becaus:0,been:[0,4],begin_new_match:[4,5],being:4,belong:1,below:4,big:0,binari:0,bit:0,bitbuff:2,bomb_abortdefus:[4,5],bomb_abortpl:[4,5],bomb_beep:[4,5],bomb_begindefus:[4,5],bomb_beginpl:[4,5],bomb_defus:[4,5],bomb_drop:[4,5],bomb_explod:[4,5],bomb_pickup:[4,5],bomb_plant:[4,5],bonus_upd:[4,5],bool:0,bot:0,bot_takeov:[4,5],both:0,boundari:0,break_break:[4,5],break_prop:[4,5],buf:0,buffer:0,bullet_impact:[4,5],buymenu_clos:[4,5],buymenu_open:[4,5],buytime_end:[4,5],bytebuff:2,bytes_read:0,bytes_requir:0,bytestr:0,calcul:0,call:[0,1],callback:[0,4,6,7],callvotefail:[4,8],can:[0,4,6,7],cart_upd:[4,5],cash:1,cast:0,cell:0,cell_coord:0,cell_coord_integr:0,cell_coord_lowprecis:0,chang:[0,4],charact:0,chat:0,clan:1,class_by_message_nam:0,class_id:[0,1,4],class_nam:4,classnotfounderror:0,client:0,client_disconnect:[4,5],client_loadout_chang:[4,5],clientinfo:[4,8],closecapt:[4,8],closecaptiondirect:[4,8],cmd_header:0,collect:[0,1],collect_exclus:0,collect_prop:0,command:[0,4],commanderror:0,commandhead:0,commandinfo:0,complement:0,compon:0,compress:0,comput:0,consecut:0,consist:0,contain:[0,4],content:2,conveni:0,convert:0,coord:0,coord_mp:0,coord_mp_integr:0,coord_mp_lowprecis:0,coord_typ:0,coordin:0,correct:0,correctli:0,correspond:0,crc:0,creat:[0,1,4],create_string_t:0,cs_game_disconnect:[4,5],cs_intermiss:[4,5],cs_match_end_restart:[4,5],cs_pre_restart:[4,5],cs_prev_next_spect:[4,5],cs_round_final_beep:[4,5],cs_round_start_beep:[4,5],cs_win_panel_match:[4,5],cs_win_panel_round:[4,5],current:[0,1],current_tick:[0,4],currenttimescal:[4,8],custom:0,damag:[4,8],data:[0,4],data_table_by_nam:0,datat:0,datatable_readi:[0,4],dead:1,death:1,decod:0,decode_arrai:0,decode_float:0,decode_int64:0,decode_int:0,decode_special_float:0,decode_str:0,decode_vector:0,decode_vector_xi:0,decoy_deton:[4,5],decoy_fir:[4,5],decoy_start:[4,5],def:4,defin:0,defuser_drop:[4,5],defuser_pickup:[4,5],dem:[0,6,7],demo:[0,4],demo_packet:[0,4],demofil:[2,4],demohead:0,demopars:7,depend:0,describ:[0,4],descript:0,desiredtimescal:[4,8],detail:0,determin:0,dict:0,dictionari:0,differ:0,difficulty_chang:[4,5],directori:0,disconnecttolobbi:[4,8],displayinventori:[4,8],dm_bonus_weapon_start:[4,5],doesn:0,don:0,done:0,door_mov:[4,5],download:0,dt_csplayer:0,dt_entityclassnam:0,dt_weapon:0,each:[0,4],effect:0,either:[0,1],element:0,emit:[0,4,6,7],enable_restart_vot:[4,5],encod:0,encount:0,end:[0,4],endian:0,endmatch_cmm_start_reveal_item:[4,5],endmatch_mapvote_selecting_map:[4,5],enough:0,enter_bombzon:[4,5],enter_buyzon:[4,5],enter_rescue_zon:[4,5],entiti:[0,2,4],entity_kil:[4,5],entity_list:[0,2],entity_vis:[4,5],entitylist:1,entri:[0,4],etc:0,event:[0,6,7],exactli:0,exampl:[0,1],except:0,exclud:0,exclus:0,exist:0,exit_bombzon:[4,5],exit_buyzon:[4,5],exit_rescue_zon:[4,5],explan:0,fade:[4,8],fall:1,field:2,file:[0,4,6,7],finale_start:[4,5],find:[0,1],finish:4,first:[0,1],fix:0,fixedlengthstr:0,flag:0,flare_ignite_npc:[4,5],flashbang_deton:[4,5],flat:0,flatten:0,flatten_data_t:0,follow:[0,4],format:0,found:0,fraction:0,frame:0,freezecam_start:[4,5],friend:0,from:0,func:0,futur:0,game:[0,4],game_end:[4,5],game_ev:[0,4],game_init:[4,5],game_messag:[4,5],game_newmap:[4,5],game_rul:[0,2],game_start:[4,5],gameinstructor_draw:[4,5],gameinstructor_nodraw:[4,5],gamerul:1,gametitl:[4,8],gameui_hidden:[4,5],gc_connect:[4,5],geiger:[4,8],gener:[0,6,7],genral:0,get:[0,1],get_by_handl:1,get_by_user_id:1,get_on:1,get_prop:1,gg_bonus_grenade_achiev:[4,5],gg_final_weapon_achiev:[4,5],gg_killed_enemi:[4,5],gg_leader:[4,5],gg_player_impending_upgrad:[4,5],gg_player_levelup:[4,5],gg_reset_round_start_sound:[4,5],gg_team_lead:[4,5],ggprogressive_player_levelup:[4,5],ggtr_player_levelup:[4,5],given:0,grenade_bounc:[4,5],grenade_thrown:[4,5],ground:1,guid:0,half:1,handl:[0,1,4],handle_data_t:0,handle_demo_packet:0,handle_game_ev:0,handle_game_event_list:0,handle_packet_ent:0,handle_string_t:0,handle_user_messag:0,has:[0,4],have:[0,4],header:0,health:1,hegrenade_deton:[4,5],helicopter_grenade_punt_miss:[4,5],hide_freezepanel:[4,5],hinttext:[4,8],hit:1,hl2demo0:0,hltv:0,hltv_cameraman:[4,5],hltv_changed_mod:[4,5],hltv_changed_target:[4,5],hltv_chase:[4,5],hltv_chat:[4,5],hltv_fix:[4,5],hltv_messag:[4,5],hltv_rank_camera:[4,5],hltv_rank_ent:[4,5],hltv_statu:[4,5],hltv_titl:[4,5],hostage_call_for_help:[4,5],hostage_follow:[4,5],hostage_hurt:[4,5],hostage_kil:[4,5],hostage_rescu:[4,5],hostage_rescued_al:[4,5],hostage_stops_follow:[4,5],hostname_chang:[4,5],how:0,hudmsg:[4,8],hudtext:[4,8],idea:0,includ:0,index:[0,1,4],indic:0,inferno_expir:[4,5],inferno_extinguish:[4,5],inferno_startburn:[4,5],info:0,initi:0,insert:1,inspect_weapon:[4,5],instanc:[0,4],instance_baselin:0,instanti:0,instead:0,instructor_server_hint_cr:[4,5],instructor_server_hint_stop:[4,5],integ:0,integr:0,interpret:0,inventory_upd:[4,5],item_equip:[4,5],item_found:[4,5],item_index:1,item_pickup:[4,5],item_purchas:[4,5],item_remov:[4,5],item_schema_initi:[4,5],items_gift:[4,5],its:0,itself:0,jointeam_fail:[4,5],just:[0,4],kei:[0,1],keyhinttext:[4,8],kill:1,killcam:[4,8],kwarg:0,last:1,last_index:0,later:0,length:0,level:0,librari:[6,7],life:1,life_st:1,like:0,list:[0,1,4],littl:0,local:0,mai:0,maintain:0,map:[0,1],map_transit:[4,5],match:1,match_end_condit:[4,5],matchendcondit:[4,8],material_default_complet:[4,5],max_entri:0,maximum:0,mb_input_lock_cancel:[4,5],mb_input_lock_success:[4,5],merg:0,mesh:1,messag:[0,4],message_typ:4,method:[0,1],modul:2,molotov_deton:[4,5],more:0,move:[0,1],msg:[0,4],msg_:0,msg_type:4,multi:0,multipl:0,mutablesequ:1,name:[0,1,4],nan:0,nav:1,nav_block:[4,5],nav_gener:[4,5],navig:1,neg:0,net:4,net_:[0,4],net_disconnect:[3,4],net_fil:[3,4],net_nop:[3,4],net_playeravatardata:[3,4],net_setconvar:[3,4],net_signonst:[3,4],net_splitscreenus:[3,4],net_stringcmd:[3,4],net_tick:[3,4],netmessag:0,network:0,new_ent:1,new_wai:0,next:0,next_dword:0,nextlevel_chang:[4,5],none:[0,1],normal:0,noscal:0,num_bit:0,num_byt:0,num_entri:0,number:[0,1],numbr:0,object:[0,1,4],occupi:1,occur:0,onc:0,one:0,onli:0,origin:4,originviewangl:0,other:0,other_death:[4,5],otherwis:0,own:1,owner:1,pack:0,pack_format:0,packag:2,packet:[0,4],paramet:0,pars:[0,4,6,7],parse_entity_upd:0,parse_instance_baselin:0,parse_string_table_upd:0,parser:[0,1],part:0,pass:4,pend:[0,4],physgun_pickup:[4,5],pitch:1,place:1,plai:1,playback:0,player:[0,2],player_activ:[4,5],player_avenged_teamm:[4,5],player_blind:[4,5],player_changenam:[4,5],player_chat:[4,5],player_class:[4,5],player_connect:[4,5],player_connect_ful:[4,5],player_death:[4,5],player_dec:[4,5],player_disconnect:[4,5],player_falldamag:[4,5],player_footstep:[4,5],player_given_c4:[4,5],player_hintmessag:[4,5],player_hurt:[4,5],player_info:[4,5],player_jump:[4,5],player_radio:[4,5],player_reset_vot:[4,5],player_sai:[4,5],player_scor:[4,5],player_shoot:[4,5],player_spawn:[4,5],player_stats_upd:[4,5],player_team:[4,5],player_us:[4,5],playerstatsupd:[4,8],point:0,popul:0,posit:1,precis:0,present:0,previous_own:1,prioriti:0,process:[4,6,7],processspottedentityupd:[4,8],prop:[1,2],properti:[0,1,4],proto:0,protobuf:0,protocol:0,provd:0,provid:0,proxi:0,qangl:0,radio:0,radiotext:[4,8],ragdoll_dissolv:[4,5],rais:0,rang:0,raw:0,rawaudio:[4,8],reach:0,read:0,read_bit:0,read_bit_cell_coord:0,read_bit_coord:0,read_bit_norm:0,read_bitstream:0,read_command_data:0,read_command_head:0,read_field_index:0,read_game_titledata:[4,5],read_new_ent:0,read_packet_data:0,read_raw_data:0,read_sequence_data:0,read_short:0,read_sint_bit:0,read_str:0,read_uint_bit:0,read_user_command:0,read_user_data:0,read_var_byt:0,read_var_int:0,read_varint:0,record:0,recurs:0,refer:[0,1],referenc:0,regist:[0,4,6,7],relat:0,reloadeffect:[4,8],remain:0,replai:0,repost_xbox_achiev:[4,5],repres:[0,1],requestst:[4,8],reset_game_titledata:[4,5],reset_player_control:[4,5],resethud:[4,8],result:0,round:0,round_announce_fin:[4,5],round_announce_last_round_half:[4,5],round_announce_match_point:[4,5],round_announce_match_start:[4,5],round_announce_warmup:[4,5],round_end:[4,5],round_end_upload_stat:[4,5],round_freeze_end:[4,5],round_mvp:[4,5],round_officially_end:[4,5],round_poststart:[4,5],round_prestart:[4,5],round_start:[4,5],round_start_pre_ent:[4,5],round_time_warn:[4,5],rumbl:[4,8],run:0,same:0,saytext2:[4,8],saytext:[4,8],scale:0,score:1,score_first_half:1,score_second_half:1,seasoncoin_levelup:[4,5],second:[0,1],see:0,self:0,send:0,sendaudio:[4,8],sent:0,sequenc:0,seri:0,serial:1,serv:0,server:[0,1,4],server_addban:[4,5],server_class:[0,1],server_cvar:[4,5],server_messag:[4,5],server_pre_shutdown:[4,5],server_removeban:[4,5],server_shutdown:[4,5],server_spawn:[4,5],set:0,set_instructor_group_en:[4,5],sfuievent:[4,5],shake:[4,8],show_freezepanel:[4,5],sign:0,signon:0,silencer_detach:[4,5],silencer_off:[4,5],silencer_on:[4,5],singl:0,slfloat32:0,smokegrenade_deton:[4,5],smokegrenade_expir:[4,5],some:0,sort:0,sourc:[0,1],span:0,spec_mode_upd:[4,5],spec_target_upd:[4,5],speci:4,special:0,specif:4,specifi:0,splitcommandinfo:0,sprop_unsign:0,start:4,start_halftim:[4,5],start_vot:[4,5],state:[0,1],steam:1,steam_id:1,still:1,stopspectatormod:[4,8],store_pricesheet_upd:[4,5],str:0,stream:0,string:[0,4],string_table_upd:[0,4],strip:0,structur:2,stuff:0,submodul:2,subpackag:2,suitcas:0,survival_announce_phas:[4,5],svc:4,svc_:[0,4],svc_broadcast_command:[3,4],svc_bspdecal:[3,4],svc_classinfo:[3,4],svc_cmdkeyvalu:[3,4],svc_createstringt:[3,4],svc_crosshairangl:[3,4],svc_encrypteddata:[3,4],svc_entitymessag:[3,4],svc_fixangl:[3,4],svc_gameev:[3,4],svc_gameeventlist:[3,4],svc_getcvarvalu:[3,4],svc_hltvreplai:[3,4],svc_menu:[3,4],svc_packetent:[3,4],svc_paintmapdata:[3,4],svc_prefetch:[3,4],svc_print:[3,4],svc_sendtabl:[3,4],svc_serverinfo:[3,4],svc_setpaus:[3,4],svc_setview:[3,4],svc_sound:[3,4],svc_splitscreen:[3,4],svc_tempent:[3,4],svc_updatestringt:[3,4],svc_usermessag:[3,4],svc_voicedata:[3,4],svc_voiceinit:[3,4],switch_team:[4,5],tabl:[0,1,4],table_by_nam:0,table_nam:[0,4],table_upd:0,tagrenade_deton:[4,5],team:[0,2],team_info:[4,5],team_num:1,team_scor:[4,5],teamchange_pend:[4,5],teamplay_broadcast_audio:[4,5],teamplay_round_start:[4,5],termin:0,text:0,textmsg:[4,8],than:0,them:0,thi:[0,1,4],those:0,tick:[0,4],tick_end:[0,4],tick_start:[0,4],time:0,tournament_reward:[4,5],tr_exit_hint_trigg:[4,5],tr_mark_best_tim:[4,5],tr_mark_complet:[4,5],tr_player_flashbang:[4,5],tr_show_exit_msgbox:[4,5],tr_show_finish_msgbox:[4,5],train:[4,8],treat:0,treatement:0,trial_time_expir:[4,5],trig:0,trigger:[0,4],tupl:[0,1],two:0,type:[0,4],ubint32sequ:0,ugc_file_download_finish:[4,5],ugc_file_download_start:[4,5],ugc_map_download_error:[4,5],ugc_map_info_receiv:[4,5],ugc_map_unsubscrib:[4,5],um_chat:4,uniqu:0,unpack:0,unpack_format:0,unsign:0,until:0,updat:[0,1,4],update_matchmaking_stat:[4,5],update_prop:1,update_string_t:0,updateteammonei:[4,8],used:0,user:[0,4],user_data:[0,4],user_data_bit:0,user_data_download:[4,5],user_data_fixed_s:0,user_id:1,user_info:0,user_messag:[0,4],userinfo:0,uses:0,util:2,valu:[0,1,4],var_nam:4,variabl:0,varint:0,vector:[0,1],verify_client_hit:[4,5],version:0,vguimenu:[4,8],view:1,view_angl:1,vip_escap:[4,5],vip_kil:[4,5],voic:0,voicemask:[4,8],vote_cast:[4,5],vote_chang:[4,5],vote_end:[4,5],vote_fail:[4,5],vote_opt:[4,5],vote_pass:[4,5],vote_start:[4,5],votefail:[4,8],votepass:[4,8],votestart:[4,8],wai:0,wait:1,walkabl:1,warmuphasend:[4,8],weapon:[0,2],weapon_fir:[4,5],weapon_fire_on_empti:[4,5],weapon_outofammo:[4,5],weapon_reload:[4,5],weapon_zoom:[4,5],weapon_zoom_rifl:[4,5],when:0,which:[0,1,4,6,7],who:0,word:0,world:0,would:1,write_game_titledata:[4,5],write_profile_data:[4,5],x00:0,x11:0,x22:0,xaa:0,xf1:0,xrankget:[4,8],xrankupd:[4,8],xuid:0,yaw:1,yet:0,zero:0},titles:["demoparser package","demoparser.entities package","demoparser","&lt;no title&gt;","Events","&lt;no title&gt;","Welcome to demoparser\u2019s documentation!","&lt;no title&gt;","&lt;no title&gt;"],titleterms:{"const":0,base:1,bitbuff:0,bytebuff:0,content:[0,1],demofil:0,demopars:[0,1,2,6],document:6,entiti:1,entity_list:1,event:4,field:0,game_rul:1,modul:[0,1],packag:[0,1],player:1,prop:0,structur:0,submodul:[0,1],subpackag:0,team:1,util:0,weapon:1,welcom:6}})